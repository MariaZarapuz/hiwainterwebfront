import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-plate',
  templateUrl: './form-plate.component.html',
  styleUrls: ['./form-plate.component.css']
})
export class FormPlateComponent implements OnInit {

  formPlate: FormGroup;
  @Input() mode;
  @Input() modify;

  arrayTypeFood = [
    'Entrantes', 'Hamburguesas', 'Bocadillos', 'Sandwich', 'Postres'
  ];

  arrayAllergens = [
    {
      name: 'gluten',
      translate: 'Gluten',
      icon: '../../../../assets/imagenes/gluten .png'
    },
    {
      name: 'crustacean',
      translate: 'Crustáceo',
      icon: '../../../../assets/imagenes/crustaceo.png'
    },
    {
      name: 'egg',
      translate: 'Huevos',
      icon: '../../../../assets/imagenes/huevo.png'
    },
    {
      name: 'fish',
      translate: 'Pescado',
      icon: '../../../../assets/imagenes/fish.png'
    },
    {
      name: 'penaut',
      translate: 'Cacahuete',
      icon: '../../../../assets/imagenes/peanut.png'
    },
    {
      name: 'soya',
      translate: 'Soja',
      icon: '../../../../assets/imagenes/soja.png'
    },
    {
      name: 'lactose',
      translate: 'Lacteos',
      icon: '../../../../assets/imagenes/lacteos.png'
    },
    {
      name: 'nuts',
      translate: 'Frutos cascara',
      icon: '../../../../assets/imagenes/nut.png'
    },
    {
      name: 'celery',
      translate: 'Apio',
      icon: '../../../../assets/imagenes/apio.png'
    },
    {
      name: 'mustard',
      translate: 'Mostaza',
      icon: '../../../../assets/imagenes/mostaza.png'
    },
    {
      name: 'sesame',
      translate: 'Granos de sésamo',
      icon: '../../../../assets/imagenes/sesamo.png'
    },
    {
      name: 'gmo',
      translate: 'Dióxido de azufre y sulfito',
      icon: '../../../../assets/imagenes/gmo.png'
    },
    {
      name: 'mollusks',
      translate: 'Moluscos',
      icon: '../../../../assets/imagenes/moluscos.png'
    },
    {
      name: 'lupin',
      translate: 'Altramuces',
      icon: '../../../../assets/imagenes/lupin.png'
    }

  ];
  imageUrl: any;
  dataProduct: Object;
  id: any;
  category: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private menuService: MenuService,
    private sanitization: DomSanitizer) {
    this.imageUrl = '';
    this.formPlate = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      img: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      gluten: new FormControl(''),
      egg: new FormControl(''),
      nuts: new FormControl(''),
      sesame: new FormControl(''),
      fish: new FormControl(''),
      gmo: new FormControl(''),
      lactose: new FormControl(''),
      penaut: new FormControl(''),
      crustacean: new FormControl(''),
      lupin: new FormControl(''),
      soya: new FormControl(''),
      mustard: new FormControl(''),
      mollusks: new FormControl(''),
      celery: new FormControl(''),

    });
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.id = params.id
    );

    if (this.modify === 'modify') {
      this.getFormModify(this.id, this.category);
    }
  }

  sendFormMenu() {
    let plate = this.formPlate.value;
    plate = this.changeFalseOrTrue(plate);
    plate = this.createObjectMenu(plate);
    this.menuService.insertPlate(plate);
  }

  createObjectMenu(plate) {
    const plateObject = {
      name: plate.name,
      category: plate.category,
      description: plate.description,
      price: plate.price,
      img: plate.img,
      allengen: {
        gluten: plate.gluten,
        egg: plate.egg,
        nuts: plate.nuts,
        sesame: plate.sesame,
        fish: plate.fish,
        gmo: plate.gmo,
        lactose: plate.lactose,
        penaut: plate.penaut,
        crustacean: plate.crustacean,
        lupin: plate.lupin,
        soya: plate.soya,
        mustard: plate.mustard,
        mollusks: plate.mollusks,
        celery: plate.celery,
      }
    };
    return plateObject;
  }

  changeFalseOrTrue(plate) {
    for (const key in plate) {
      if (plate.hasOwnProperty(key)) {
        const ele = plate[key];
        if (ele === true) {
          plate[key] = 1;
        } else if (ele === '') {
          plate[key] = 0;
        }
      }
    }
    return plate;
  }

  showImageInput() {
    const imgValue = this.formPlate.controls.img;
    imgValue.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.imageUrl = this.sanitization.bypassSecurityTrustUrl(value);

      console.log(this.imageUrl);
    });
  }

  async getFormModify(id, category) {
    this.dataProduct = await this.menuService.getFormModify(id, category);
    console.log(this.dataProduct)
    this.formPlate = new FormGroup({
      name: new FormControl(this.dataProduct[0].name),
      price: new FormControl(this.dataProduct[0].price),
      img: new FormControl(this.dataProduct[0].img),
      category: new FormControl(this.dataProduct[0].category),
      description: new FormControl(this.dataProduct[0].description),
      gluten: new FormControl(this.dataProduct[0].gluten),
      egg: new FormControl(this.dataProduct[0].egg),
      nuts: new FormControl(this.dataProduct[0].nuts),
      sesame: new FormControl(this.dataProduct[0].sesame),
      fish: new FormControl(this.dataProduct[0].fish),
      gmo: new FormControl(this.dataProduct[0].gmo),
      lactose: new FormControl(this.dataProduct[0].lactose),
      penaut: new FormControl(this.dataProduct[0].penaut),
      crustacean: new FormControl(this.dataProduct[0].crustacean),
      lupin: new FormControl(this.dataProduct[0].lupin),
      soya: new FormControl(this.dataProduct[0].soya),
      mustard: new FormControl(this.dataProduct[0].mustard),
      mollusks: new FormControl(this.dataProduct[0].mollusks),
      celery: new FormControl(this.dataProduct[0].celery),
    });
  }

  formModify() {
    let form = this.formPlate.value;
    form = this.changeFalseOrTrue(form);

    this.menuService.formModify(this.id, form);
  }

}
