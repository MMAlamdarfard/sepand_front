

type sideBar={
   title:string,
   menu:menuBar[]
}
type menuBar={
  menu:string,
  icon?:string,
  url?:string
  sub?:subMenu[]
}
type subMenu={
  submenu:string,
  url?:string
}

const side_data:sideBar[]=[
  {
   title:"پنل مدیریت",
   menu:[
    {
      menu:"پیشخوان",
      icon:'dashboard',
      url:'/'
    },
    {
      menu:"ادمین",
      icon:'admin',
      sub:[
         { 
           submenu:"مدیریت کاربران سایت", 
           url:'/admin/user'
        },
        { 
           submenu:"مدیریت سطوح کاربری", 
           url:'/admin/role'
        },
        { 
           submenu:"مدیریت دسترسی ها", 
           url:'/admin/accessibility'
        },
      ]
    },
    {
      menu:"پرسنل",
      icon: 'user',
      sub:[
        { 
           submenu:"مدیریت پرسنل", 
           url:'/personel/manage_personel'
        },
        { 
          submenu:"شرکت ها",
          url:'/personel/company'
        },
        {
          submenu:"دسته بندی",
          url:'/personel/category'
        },
        {
          submenu:"سمت",
          url:'/personel/role'
        },
        {
          submenu:"ثبت پرسنل",
          url:'/personel/register_personel'
        },
        {
          submenu:"لیست پرسنل",
          url:'/personel/personels'
        },
        {
          submenu:"تسویه پرسنل",
          url:'/personel/personel_payoff'
        },
        {
          submenu:"موارد قراردادی",
          url:'/personel/contract'
        },
        {
          submenu:"ثبت جریمه",
          url:'/personel/set_penalty'
        },
        {
          submenu:"لیست جریمه",
          url:'/personel/penalties'
        },
        {
          submenu:"کارکرد ها",
          url:'/personel/works'
        },
        {
          submenu:"پرداختی ها",
          url:'/personel/cash'
        },
      ]
    },
    {
      menu:"حضور و غیاب",
      icon: 'attend',
      sub:[
        { 
          submenu:"ثبت حضور و غیاب",
          url:'/attend/register_attend'
        },
        {
          submenu:"لیست حضور و غیاب",
          url:'/attend/attend_list'
        },
        { 
           submenu:"اضافه کار",
           url:'/attend/extra_work'
        },
        { 
          submenu:"ثبت تعطیلی",
          url:'/attend/register_holiday'
       },
        { 
        submenu:"شیفت کاری",
        url:'/attend/shift'
       },
      
      ]
    },
    {
      menu:"قرارداد",
      icon:'contract',
      sub:[

      ]
      
    },
    {
      menu:"بارنامه",
      icon:'bill',
      sub:[
        { 
          submenu:"سوخت",
          url:'/waybill/fuel'
        },
        {
          submenu:"سیمان",
          url:'/waybill/cement'
        },
        {
          submenu:"قیر",
          url:'/waybill/bitumen'
        },
       
      ]
    },
    {
      menu:"حسابداری",
      icon:'Accounting',
      sub:[]
    },
    

   ]
  },
 
 

]

export default side_data;