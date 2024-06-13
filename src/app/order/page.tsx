import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderType from "@/components/Order/OrderType";
import OrderDetail from "@/components/Order/OrderDetail";
import Image from "next/image";

const orderDetails = [
  {id:'#4436', date:"07-Jun-2024", exchange:'Sell', currency:'USDT', amount:'500', receiving:'CHF', status:'Completed'},
  {id:'#4436', date:"07-Jun-2024", exchange:'Buy', currency:'USDT', amount:'500', receiving:'CHF', status:'Completed'},
  {id:'#4436', date:"07-Jun-2024", exchange:'Buy', currency:'BTC', amount:'500', receiving:'CHF', status:'Completed'},
  {id:'#4436', date:"07-Jun-2024", exchange:'Sell', currency:'BTC', amount:'500', receiving:'CHF', status:'Completed'},
  {id:'#4436', date:"07-Jun-2024", exchange:'Sell', currency:'ETH', amount:'500', receiving:'CHF', status:'Completed'},
  {id:'#4436', date:"07-Jun-2024", exchange:'Sell', currency:'ETH', amount:'500', receiving:'CHF', status:'Completed'}
];

export default function Order() {

  return (
    <>
      <DefaultLayout>
        <div className="pr-16">
          <div className="font-medium text-xl text-primary mb-5">Order</div>
          <div className="flex gap-12">              
            <div className="w-1/4">
              <OrderType bgcolor="bg-[#AC9AE2]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Total Order" value="500" />
            </div>
            <div className="w-1/4">
              <OrderType bgcolor="bg-[#04C063]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Completed Order" value="200" />
            </div>
            <div className="w-1/4">
              <OrderType bgcolor="bg-[#F2994A]" icon="/images/icon/icon-order2.svg" icon_size={48} name="pending Order" value="30" />
            </div>
            <div className="w-1/4">
              <OrderType bgcolor="bg-[#FF3032]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Cancelled Order" value="10" />
            </div>
          </div>
          {/**Table */}
          <div className="bg-white rounded-3xl px-8 py-6 mt-8">
            <table className="w-full text-sm">
              <thead className="text-secondary border-b-[1px] border-secondary">
                <tr>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Order ID</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Order Date</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Buy/Sell</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Buy/Sell Amount</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Receiving Amount</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal pb-2">
                    <div className="flex gap-3">
                      <div>Status</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((content:any, id:number) => (<OrderDetail key={id} content={content} />))
                  
                  }
              </tbody>
            </table>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}