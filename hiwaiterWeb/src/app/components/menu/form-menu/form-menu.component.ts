import { Component, OnInit, platformCore } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {
  form: FormGroup;


  arrayAllergens = [
    {
      name: 'gluten',
      icon: '../../../../assets/imagenes/gluten .png'
    },
    {
      name: 'crustacean',
      icon: '../../../../assets/imagenes/crustaceo.png'
    },
    {
      name: 'egg',
      icon: '../../../../assets/imagenes/huevo.png'
    },
    {
      name: 'fish',
      icon: '../../../../assets/imagenes/fish.png'
    },
    {
      name: 'penaut',
      icon: '../../../../assets/imagenes/peanut.png'
    },
    {
      name: 'soya',
      icon: '../../../../assets/imagenes/soja.png'
    },
    {
      name: 'lactose',
      icon: '../../../../assets/imagenes/lacteos.png'
    },
    {
      name: 'nuts',
      icon: '../../../../assets/imagenes/nut.png'
    },
    {
      name: 'celery',
      icon: '../../../../assets/imagenes/apio.png'
    },
    {
      name: 'mustard',
      icon: '../../../../assets/imagenes/mostaza.png'
    },
    {
      name: 'sesame',
      icon: '../../../../assets/imagenes/sesamo.png'
    },
    {
      name: 'gmo',
      icon: '../../../../assets/imagenes/gmo.png'
    },
    {
      name: 'mollusks',
      icon: '../../../../assets/imagenes/moluscos.png'
    },
    {
      name: 'lupin',
      icon: '../../../../assets/imagenes/lupin.png'
    }

  ];
  plate: {};

  constructor(private menuService: MenuService) {
    this.form = new FormGroup({
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
  }
  sendFormMenu() {
    let plate = this.form.value;
    plate = this.changeFalseOrTrue(plate)
    plate = this.createObjectMenu(plate)
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
}
