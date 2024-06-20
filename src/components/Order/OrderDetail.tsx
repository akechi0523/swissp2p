import Image from "next/image";

interface Props {
  content:{
    id: string;
    date: string; 
    exchange: string; 
    currency: string;
    amount: string; 
    receiving: string; 
    status: string;
  }
}
const OrderDetail = ({content}: Props) => {
  let icon_exchange;
  switch (content.currency) {
		case "USDT": 
			icon_exchange = '/images/icon/icon-usdt.svg';
			break;
		case "BTC": 
			icon_exchange = '/images/icon/icon-btc.svg';
			break;
		case "ETH": 
			icon_exchange = '/images/icon/icon-eth.svg';
			break;
    case "CHF": 
			icon_exchange = '/images/icon/icon-chf.svg';
			break;
		default:
			icon_exchange = '/images/icon/icon-usdt.svg';
			break;
	}
  let icon_receiving;
  switch (content.receiving) {
		case "USDT": 
			icon_receiving = '/images/icon/icon-usdt.svg';
			break;
		case "BTC": 
			icon_receiving = '/images/icon/icon-btc.svg';
			break;
		case "ETH": 
			icon_receiving = '/images/icon/icon-eth.svg';
			break;
    case "CHF": 
			icon_receiving = '/images/icon/icon-chf.svg';
			break;
		default:
			icon_receiving = '/images/icon/icon-usdt.svg';
			break;
	}

  return (
    <>
      <tr className="text-primary dark:text-white font-medium">
        <td className="px-3 pt-3 sticky">{content.id}</td>
        <td className="px-3 pt-3 sticky">{content.date}</td>
        <td className={`px-3 pt-3 sticky ${content.exchange == 'Sell' ? 'text-[#FF3032]' : 'text-[#04C063]'}`}>{content.exchange}</td>
        <td className="px-3 pt-3 sticky"><div className="flex items-center gap-2"><Image src={icon_exchange} width={24} height={24} alt="icon" />{content.amount} {content.currency}</div></td>
        <td className="px-3 pt-3 sticky"><div className="flex items-center gap-2"><Image src={icon_receiving} width={24} height={24} alt="icon" />{content.amount} {content.receiving}</div></td>
        <td className="px-3 pt-3 sticky"><div className="flex"><div className="text-[#04C063] bg-[#00C076] rounded bg-opacity-10 px-2 py-1">{content.status}</div></div></td>
      </tr>
    </>
  );
}

export default OrderDetail;