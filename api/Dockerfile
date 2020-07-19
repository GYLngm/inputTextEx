FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		default-mysql-client
RUN mkdir -p /app/api
WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt
COPY . /app/api
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
