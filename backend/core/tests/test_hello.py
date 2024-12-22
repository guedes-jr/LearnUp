import pytest
from django.urls import reverse

@pytest.mark.django_db
def test_hello(client):
    response = client.get(reverse('hello'))
    assert response.status_code == 200
    assert response.content == b'Hello, World!'