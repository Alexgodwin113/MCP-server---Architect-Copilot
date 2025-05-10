#!/usr/bin/env python
"""
Simple client to query the Architect Copilot MCP server.
"""
import sys
import requests

def query_architect_copilot(question):
    """Send a question to the Architect Copilot MCP server."""
    url = "http://127.0.0.1:5001/invoke"
    data = {
        "name": "answer_architect_question",
        "parameters": {
            "question": question
        }
    }
    
    try:
        print(f"Sending request to {url} with data: {data}")
        response = requests.post(url, json=data)
        print(f"Response status: {response.status_code}")
        response.raise_for_status()  # Raise exception for HTTP errors
        return response.json().get("result", "No result returned")
    except requests.exceptions.RequestException as e:
        return f"Error connecting to MCP server: {e}"

if __name__ == "__main__":
    question = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "What is the accepted version of NodeJS at Contoso?"
    print(f"Querying: '{question}'")
    result = query_architect_copilot(question)
    print("\nAnswer:")
    print(result)