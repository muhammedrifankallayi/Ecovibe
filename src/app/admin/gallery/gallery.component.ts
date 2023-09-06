import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  img = ''
  showImg=[]
  banner:string =''

  galleryImgs = []
  ngOnInit(): void {
    this.service.getimages().subscribe((res: any) => {
      this.galleryImgs = res.images
      this.showImg = res.mainImg
      this.banner = res.banner
    })
  }
  constructor(private service: AdminService, private http: HttpClient) { }

  imageSubmitBtnShow: boolean = false
  images: any

  // side bar toggle
  action: boolean = true
  handleSidebarToggle(value: boolean) {
    this.action = value
  }


  deleteImage(index: number) {
    this.service.deleteImg(index).subscribe((res: any) => {
      Swal.fire({
        timer: 1000,
        icon: "success",
        text: res.message,
        title: "Deleted"
      })
      this.ngOnInit()
    })

  }

  addToMainImg(index: number) {
    this.service.addToMainImage(index).subscribe((res: any) => {
      Swal.fire({
        icon: "success",
        timer: 1000,
        title: "Added to Main 5",
        text: res.message
      })
      this.ngOnInit()
    })

  }

  addAsBanner(index: number) {
    this.service.addAsBanner(index).subscribe((res) => {
      Swal.fire({
        icon: "success",
        timer: 1000,
        title: "Added as a Banner"
      })
      this.ngOnInit()
    })
  }






  //  image shows
  selectedImage: any = null;
  dummyImage = 'https://dummyimage.com/hd1080';




  cardValues: { url: string }[] = [];

  handleFileInput(event: any) {


    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileUrl = URL.createObjectURL(file);
      this.cardValues.push({ url: fileUrl });
    }



    this.images = event.target.files;

    this.imageSubmitBtnShow = true



  }


  OnSubmit() {

    console.log(this.images);
    const formdata = new FormData()
    for (let img of this.images) {
      formdata.append("files", img)
    }


    this.service.uploadImage(formdata).subscribe((res) => {
      Swal.fire({
        icon: "success",
        timer: 1000,
        title: "Uploaded"
      })

      this.ngOnInit()

    })


  }



}
