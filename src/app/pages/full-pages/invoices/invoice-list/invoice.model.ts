export interface InvoiceItem {
    itemNo: string;
    productDescription: string;
    hours: string;
    totalAmount: string;
  }
export interface DataModel{
    id:number;
    invoiceNo: string;
    invoicedate: string;
    dueDate: string;
    balanceAmount: string;
    sellerDtls: string;
    buyerDtls: string;
    items: InvoiceItem[]; 
}  