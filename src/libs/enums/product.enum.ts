export enum ProductSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  NORMAL = "NORMAL,"
}

export enum ProductUnit {
  PIECE = "PIECE",
  BOX = "BOX",
  PACK = "PACK",
  SET = "SET",
}

export enum ProductStatus {
  ACTIVE = "ACTIVE",      // sotuvda
  INACTIVE = "INACTIVE",  // vaqtincha o‘chiq
  OUT_OF_STOCK = "OUT_OF_STOCK", // qolmagan
  DELETED = "DELETED",  
}

export enum ProductCategory {
  CONSUMABLE = "CONSUMABLE", // spirt, gel, antiseptik
  EQUIPMENT = "EQUIPMENT",   // apparat
  PROTECTION = "PROTECTION", // maska, qo‘lqop
  TOOL = "TOOL",             // termometr, stetoskop
  OTHER = "OTHER",
  
}