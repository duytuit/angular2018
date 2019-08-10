import { Component, OnInit, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.css']
})
export class LoaiPhimComponent implements OnInit {
  constructor( private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
   
  }
 
  onSubmit(form: NgForm) {
    // if (form.value.EmployeeID == null) {
    //   this.employeeService.postEmployee(form.value)
    //     .subscribe(data => {
    //       this.resetForm(form);
    //       this.employeeService.getEmployeeList();
    //       this.toastr.success('New Record Added Succcessfully', 'Employee Register');
    //     })
    // }
    // else {
    //   this.employeeService.putEmployee(form.value.EmployeeID, form.value)
    //   .subscribe(data => {
    //     this.resetForm(form);
    //     this.employeeService.getEmployeeList();
    //     this.toastr.info('Record Updated Successfully!', 'Employee Register');
    //   });
    // }
  }
}
