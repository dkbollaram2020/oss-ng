import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  // costingDetails & id should be same
  createDb() {
    const products: Product[] = [
      {
        "id": 1,
        "costingDetails": 1,
        "tacticId": 1,
        "unitDollar": "1000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "x*x",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": null
      },
      {
        "id": 2,
        "costingDetails": 2,
        "tacticId": 2,
        "unitDollar": "2000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 500,
        "balanceOfShipment": 50,
        "forecastImpact": "yyy",
        "leaseToRetail": "yyy",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-06T13:56:46.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": null
      },
      {
        "id": 3,
        "costingDetails": 3,
        "tacticId": 1,
        "unitDollar": "1000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "xxx",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": "2019-08-07T10:20:05.000+0000"
      },
      {
        "id": 4,
        "costingDetails": 4,
        "tacticId": 1,
        "unitDollar": "1000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "xxx",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": "2019-08-07T12:58:31.000+0000"
      },
      {
        "id": 6,
        "costingDetails": 6,
        "tacticId": 1,
        "unitDollar": "1000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "xxx",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": "2019-08-07T12:59:26.000+0000"
      },
      {
        "id": 7,
        "costingDetails": 7,
        "tacticId": 1,
        "unitDollar": "1000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "xxx",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": "2019-08-07T13:57:18.000+0000"
      },
      {
        "id": 8,
        "costingDetails": 8,
        "tacticId": 1,
        "unitDollar": "2000.00",
        "currentMonth": "Aug",
        "nextMonth": "Sept",
        "stock": 200,
        "balanceOfShipment": 35,
        "forecastImpact": "xxx",
        "leaseToRetail": "xxx",
        "comments": "---",
        "iLogonAdd": "T9391VP",
        "tStmpAdd": "2019-08-05T10:00:08.000+0000",
        "iLogonUpd": null,
        "tStmpUdp": "2019-08-07T13:58:34.000+0000"
      }
    ];
    return { products };
  }
}
