import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId); //Sepet listesinde productId varsa gönderilen ProductId eşitle= item
    if (item) {
      //item var ise
      item.quantity += 1; // itemdeki quantity(miktar) 1 arttır
    } else {
      //eğer yoksa eklemek gerekiyor
      let cartItem = new CartItem(); //cartItem oluştur
      cartItem.product = product; //cartItem'in product'u gönderilen product
      cartItem.quantity = 1; //carItem'in quantity(miktar)=1
      CartItems.push(cartItem); //CartItems array eleman eklemek için push kullanılır.
    }
  }

  removeFromCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId); // Ürünü buluyoruz
    if (item) {
      if (item.quantity > 1) {
        // Ürün miktarı 1'den büyükse, sadece bir tane azaltıyoruz
        item.quantity -= 1;
      } else {
        // Ürün miktarı 1 ise, ürünü sepette tamamen kaldırıyoruz
        CartItems.splice(CartItems.indexOf(item), 1); //splice belirli indexten itibaren kaç eleman silmek istiyorsak kullanılır.(cartItems'deki item'in indeks numarasını verir neresiyse ordan itibaren bir tane sil.miktarını silmez ürünü direk uçurur)
      }
    } else {
      console.error('Ürün sepetinizde bulunamadı.');
    }
  }

  //Oluşturulan sepeti çekmek için
  list(): CartItem[] {
    return CartItems;
  }
}
