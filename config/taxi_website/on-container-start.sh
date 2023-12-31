# Create migrations based on django models
# python manage.py makemigrations

# Migrate created migrations to database
# python manage.py migrate

#Collect static images
python manage.py collectstatic --no-input

# Start gunicorn server at port 8000 and keep an eye for apprenticeship-backend code changes
# If changes occur, kill worker and start a new one
gunicorn --reload taxi_website.wsgi:application -b 0.0.0.0:8000