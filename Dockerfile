# Use an official Python image
FROM python:3.10-slim

# Accept the GitHub token
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=${GITHUB_TOKEN}

# Install git and configure it to use the GitHub token
RUN apt-get update && apt-get install -y git && \
    git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@github.com/".insteadOf "https://github.com/" && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy source code
COPY . /app

# Install Python deps
RUN pip install --upgrade pip && pip install -r requirements.txt

# Expose port
EXPOSE 5001

# Start server
CMD ["python", "server.py"]
