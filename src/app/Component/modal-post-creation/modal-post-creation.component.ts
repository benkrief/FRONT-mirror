import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import * as mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {MapboxServiceService, Feature} from "../../mapbox-service.service";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";


@Component({
  selector: 'app-post-creation',
  templateUrl: './modal-post-creation.component.html',
  styleUrls: ['./modal-post-creation.component.scss']
})
export class ModalPostCreationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalPostCreationComponent>, private mapboxService: MapboxServiceService) {}
  // service ne doit pas etre public todo: voir pourquoi ça marche pas en private n



  addresses: string[] = [];
  selectedAddress = null;
  myControl = new FormControl();
  //options: string[] = [];
  filteredOptions: Observable<string[]>;

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService
        .search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.addresses = features.map(feat => feat.place_name);
        });
    } else {
      this.addresses = [];
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.addresses.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSelect(address: string) {
  this.selectedAddress = address;
  this.addresses = [];
}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    titre: new FormControl(''),
    description: new FormControl(''),
    //geocoder: new FormControl(''),
    adresse: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      titre: '',
      description: '',
     // geocoder:'',
      adresse:''
    });


  }

  postClickPost(){

  }

  postClickCancel() {
    this.dialogRef.close();
  }
}
