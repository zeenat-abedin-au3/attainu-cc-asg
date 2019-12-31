const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: "Puma, FILA & LOTTO",
      group: "Min. 50% Off",
      img:
        "https://rukminim1.flixcart.com/image/150/150/jp8ngcw0/shoe/q/v/g/368537-6-puma-black-lime-punch-white-original-imafbfdfrpcyfgr2.jpeg?q=70",
      tag: "Sports Shoes and More",
      price: "299"
    },
    {
      id: 2,
      name: "Flipkart SmartBuy",
      group: "From $79",
      img:
        "https://rukminim1.flixcart.com/image/150/150/jkpr98w0/chopper/g/3/q/swift-chopper-flipkart-smartbuy-original-imaf8yawrcburjgn.jpeg?q=70",
      tag: "Kitchen Top Deals",
      price: "79"
    },
    {
      id: 3,
      name: "Sarees",
      group: "From $299",
      img:
        "https://rukminim1.flixcart.com/image/150/150/jyyqc280/sari/a/e/s/free-ntlc3306-ratnavati-original-imafj2tsqwczkdpq.jpeg?q=70",
      tag: "Sara, Divastri & More",
      price: "299"
    },

    {
      id: 4,
      name: "Inc. 5, Puma & More",
      group: "50-70% OFF",
      img:
        "https://rukminim1.flixcart.com/image/150/150/jq4353k0/shoe/g/q/f/t696n-5-asics-t696n-original-imafc7gfjzukwduz.jpeg?q=70",
      tag: "LIMITED TIME Deal",
      price: "499"
    }
  ]
};

const dealReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dealReducer;
