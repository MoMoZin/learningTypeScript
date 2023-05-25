let displayName: string = "Jess's standing desk";
let inventoryType: string = "Funiture";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();

// define custom type
type Cost = number | string;

let originalCost: Cost = 425;

//assigning custom type to number type
let testCost: Cost;
if (typeof testCost === "number") {
  let cost: number = testCost;
}

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture"
}

interface InventoryItem {
  displayName: string;
  inventoryType: InventoryItemType;
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: Cost;

  //adding method to interface
  calculateSomething?(something: number): number;
  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

saveInventoryItem({
  displayName: "Dell Pro",
  inventoryType: InventoryItemType.Computer,
  trackingNumber: "MBP12322w3r",
  createDate: new Date(),
  originalCost: "NA"
});