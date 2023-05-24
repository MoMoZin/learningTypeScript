let displayName: string = "Jess's standing desk";
let inventoryType: string = "Funiture";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();
let originalCost: number = 425;

function getInventoryItem(trackingNumber: string): {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
