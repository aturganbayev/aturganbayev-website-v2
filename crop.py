from PIL import Image
img = Image.open('static/assets/images/umn2.png')
img = img.crop(img.getbbox())
img.save('static/assets/images/umn2.png')
