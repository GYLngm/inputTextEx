from django.http import JsonResponse
from django.utils import timezone

from inputText.models import InputText


def index(request):
    return JsonResponse({'myText': InputText.objects.get(id=request.GET['id']).my_text})


def update(request):
    try:
        # myText = InputText.objects.count()
        myText = InputText.objects.get(id=request.POST['id'])
        myText.my_text = request.POST['myText']
        myText.save()
    except (KeyError, InputText.DoesNotExist):
        new_text = InputText(my_text=request.POST['myText'], update_datetime=timezone.now())
        new_text.save()

    return JsonResponse({'myText': InputText.objects.get(id=request.POST['id']).my_text})
