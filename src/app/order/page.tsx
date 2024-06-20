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
        <div className="md:pr-16">
          <div className="font-medium text-xl text-primary dark:text-white mb-5">Order</div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-12 gap-4">              
            <div className="md:w-1/4 w-full">
              <OrderType bgcolor="bg-[#AC9AE2]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Total Order" value="500" />
            </div>
            <div className="md:w-1/4 w-full">
              <OrderType bgcolor="bg-[#04C063]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Completed Order" value="200" />
            </div>
            <div className="md:w-1/4 w-full">
              <OrderType bgcolor="bg-[#F2994A]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Pending Order" value="30" />
            </div>
            <div className="md:w-1/4 w-full">
              <OrderType bgcolor="bg-[#FF3032]" icon="/images/icon/icon-order2.svg" icon_size={48} name="Cancelled Order" value="10" />
            </div>
          </div>
          {/**Table */}
          <div className="bg-white overflow-x-auto dark:bg-primary rounded-3xl md:px-8 px-4 md:py-6 py-4 mt-8">
            <table className="min-w-full text-sm text-nowrap">
              <thead className="text-secondary border-b-[1px] border-secondary">
                <tr>  
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Order ID</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Order Date</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Buy/Sell</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Buy/Sell Amount</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Receiving Amount</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                  <th scope="col" className="font-normal px-3 sticky top-0 z-2 pb-2">
                    <div className="flex md:gap-3 gap-2">
                      <div>Status</div>
                      <Image src='/images/icon/icon-order_sort.svg' width={7} height={9} alt="icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((content:any, id:number) => (<OrderDetail key={id} content={content} />))}
              </tbody>
            </table>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}