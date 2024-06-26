from io import BytesIO
from flask import Flask, jsonify, request , send_file, make_response, Response
from flask_cors import CORS
from dotenv import load_dotenv
import os
import boto3
import botocore
from botocore.exceptions import ClientError
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
import scrapetube
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from PyPDF2 import PdfReader
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from xhtml2pdf import pisa
from io import BytesIO
import mimetypes
from werkzeug.utils import secure_filename
import re
import json
from bs4 import BeautifulSoup
import requests
import base64
import io
from rich.console import Console
import shutil
from prisma import Prisma
import google.generativeai as genai