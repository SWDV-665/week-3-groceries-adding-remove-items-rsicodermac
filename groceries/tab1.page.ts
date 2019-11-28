import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  title = "Grocery"
  
  items = [
    {
      name: 'Milk',
      quantity: 1
    },
    {
      name: 'Bread',
      quantity: 2
    },
    {
      name: 'Apples',
      quantity: 3
    },
    {
      name: 'Pork chops',
      quantity: 2
    },
    {
      name: 'Chips',
      quantity: 5
    },
  ];
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  // Remove Item
 async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.index + " ...",
      duration: 3000
      });
    (await toast).present(); 
    this.items.splice(index, 1);
  } 

  // Add Item
  addItem() {
    console.log('Adding Item...');
    this.addAlert();
  }
  
  async addAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Add Additional Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          this.items.push(item);
        }
      }]
    });
  
    await alert.present();
  }
}
