
import os
import tempfile
import rarfile
from fastapi import FastAPI, UploadFile, File, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from . import Archiver


archiver = Archiver()
app = FastAPI(
    title="Archive Extractor API",
    description="API to extract .rar files into .zip",
    version="1.0.0",
    docs_url=None,
    redoc_url=None
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "status": True,
        "detail": "Xtract API is online and working."
    }


@app.post("/extract")
async def extract_rar(file: UploadFile = File(...)):

    # Check if the media type is supported
    if file.content_type not in archiver.types:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Your archive type is not supported"
        )

    # Create a temporary directory and extract the archive content
    with tempfile.TemporaryDirectory() as output_dir:

        try:
            archiver.extract(file.content_type, file.file, output_dir)

        except rarfile.PasswordRequired:
            raise HTTPException(
                status_code=status.HTTP_501_NOT_IMPLEMENTED,
                detail="Your file is protected by a password"
            )

        # Create a zip archive
        buffer = archiver.zip_from_directory(output_dir)
        archive_name, _ = os.path.splitext(file.filename)

        return Response(
            buffer.getvalue(),
            status_code=201,
            media_type="application/x-zip-compressed",
            headers={
                'Content-Disposition': f'attachment;filename={archive_name}.zip'
            })
