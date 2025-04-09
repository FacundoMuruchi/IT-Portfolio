from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from .models import Project

def projects_view(request):
    projects = Project.objects.all()
    return render(request, 'mysite/projects.html', {'projects': projects})
