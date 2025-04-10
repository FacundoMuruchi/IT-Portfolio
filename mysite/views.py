from django.shortcuts import render
from .models import Project, Skill

def base_view(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    return render(request, 'mysite/base.html', {'projects': projects, 'skills': skills})