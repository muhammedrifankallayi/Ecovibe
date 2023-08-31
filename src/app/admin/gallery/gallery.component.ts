import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  // side bar toggle
   action:boolean=true
   handleSidebarToggle(value:boolean){
 this.action = value
  }















//  image shows
  selectedImage:any = null;
  dummyImage = 'https://dummyimage.com/hd1080'; 
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.selectedImage = e.target?.result;
      
      };

      reader.readAsDataURL(file);
    } else {
      this.selectedImage = null;
    }
  }

  cardValues: { url: string }[] = [];

  handleFileInput(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileUrl = URL.createObjectURL(file);
      this.cardValues.push({ url: fileUrl });
    }
 
  }




}
