import os
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.database import Database
import certifi


BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(str(BASE_DIR / ".env"))


def _create_mongo_client() -> MongoClient:
  uri = os.getenv("MONGO_URI")
  if not uri:
    raise RuntimeError(
      "MONGO_URI environment variable is not set. "
      "Set it in backend/.env or as an environment variable."
    )
  # Use certifi's CA bundle to avoid local Windows certificate issues
  return MongoClient(uri, tlsCAFile=certifi.where())


_client: MongoClient | None = None


def get_mongo_client() -> MongoClient:
  global _client
  if _client is None:
    _client = _create_mongo_client()
  return _client


def get_mongo_db() -> Database:
  """
  Returns the MongoDB database used by the portfolio backend.
  Uses MONGO_DB_NAME if set, otherwise defaults to 'portfolio'.
  """
  client = get_mongo_client()
  db_name = os.getenv("MONGO_DB_NAME", "portfolio")
  return client[db_name]

