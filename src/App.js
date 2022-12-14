import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// import $ from 'jquery';

var expanded = true;
function App() {



  var setStayFocus1 = () => {
    document.getElementById("btntype1").style.backgroundColor = "#009201";
    document.getElementById("btntype1").style.color = "#fff";
    document.getElementById("btntype2").style.backgroundColor = "#fff";
    document.getElementById("btntype2").style.color = "#000";
    document.getElementById("btntype3").style.backgroundColor = "#fff";
    document.getElementById("btntype3").style.color = "#000";

  }

  var setStayFocus2 = () => {
    document.getElementById("btntype2").style.backgroundColor = "#009201";
    document.getElementById("btntype2").style.color = "#fff";
    document.getElementById("btntype1").style.backgroundColor = "#fff";
    document.getElementById("btntype1").style.color = "#000";
    document.getElementById("btntype3").style.backgroundColor = "#fff";
    document.getElementById("btntype3").style.color = "#000";
  }

  var setStayFocus3 = () => {
    document.getElementById("btntype3").style.backgroundColor = "#009201";
    document.getElementById("btntype3").style.color = "#fff";
    document.getElementById("btntype2").style.backgroundColor = "#009201";
    document.getElementById("btntype2").style.color = "#fff";
    document.getElementById("btntype2").style.backgroundColor = "#fff";
    document.getElementById("btntype2").style.color = "#000";
  }


  var focusHour1 = () => {
    document.getElementById("hour1").style.backgroundColor = "#009201";
    document.getElementById("hour1").style.color = "#fff";
    document.getElementById("hour2").style.backgroundColor = "#fff";
    document.getElementById("hour2").style.color = "#000";
    document.getElementById("hour3").style.backgroundColor = "#fff";
    document.getElementById("hour3").style.color = "#000";
    document.getElementById("hour4").style.backgroundColor = "#fff";
    document.getElementById("hour4").style.color = "#000";
  }

  var focusHour2 = () => {
    document.getElementById("hour1").style.backgroundColor = "#fff";
    document.getElementById("hour1").style.color = "#000";
    document.getElementById("hour2").style.backgroundColor = "#009201";
    document.getElementById("hour2").style.color = "#fff";
    document.getElementById("hour3").style.backgroundColor = "#fff";
    document.getElementById("hour3").style.color = "#000";
    document.getElementById("hour4").style.backgroundColor = "#fff";
    document.getElementById("hour4").style.color = "#000";
  }

  var focusHour3 = () => {
    document.getElementById("hour1").style.backgroundColor = "#fff";
    document.getElementById("hour1").style.color = "#000";
    document.getElementById("hour2").style.backgroundColor = "#fff";
    document.getElementById("hour2").style.color = "#000";
    document.getElementById("hour3").style.backgroundColor = "#009201";
    document.getElementById("hour3").style.color = "#fff";
    document.getElementById("hour4").style.backgroundColor = "#fff";
    document.getElementById("hour4").style.color = "#000";
  }

  var focusHour4 = () => {
    document.getElementById("hour1").style.backgroundColor = "#fff";
    document.getElementById("hour1").style.color = "#000";
    document.getElementById("hour2").style.backgroundColor = "#fff";
    document.getElementById("hour2").style.color = "#000";
    document.getElementById("hour3").style.backgroundColor = "#fff";
    document.getElementById("hour3").style.color = "#000";
    document.getElementById("hour4").style.backgroundColor = "#009201";
    document.getElementById("hour4").style.color = "#fff";
  }


  var showCheckboxes = () => {
    expanded = !expanded;
    var array = ["hohap", "timmach", "sanphu", "noitiet", "tieuhoa"];
    var temp_option = document.getElementById('temp_option');
    temp_option.style.display = 'none';


    for (var i = 0; i < array.length; i++) {
      // expanded = false;
      var checkboxes = document.getElementById(array[i]);

      if (!expanded) {
        checkboxes.style.display = "block";
        checkboxes.style.overflowY = "scroll";
        checkboxes.style.height = "200px";

      } else {
        checkboxes.style.display = "none";
      }
    }
  }

  const [count1, setCount1] = useState();
  var countFee1 = () => {
    setCount1(0);
    let select1 = document.getElementsByName("select1");
    for (let i = 0; i < select1.length; i++) {
      if (select1[i].checked) {
        console.log(select1[i]);
        setCount1(parseFloat(select1[i].value));
      }
    }

  }

  const [count2, setCount2] = useState();
  var countFee2 = () => {
    setCount2(0);
    let select2 = document.getElementsByName("select2");
    for (let i = 0; i < select2.length; i++) {
      if (select2[i].checked) {
        console.log(select2[i]);
        setCount2(parseFloat(select2[i].value));
      }
    }

  }

  const [count3, setCount3] = useState();
  var countFee3 = () => {
    setCount3(0);
    let select3 = document.getElementsByName("select3");
    for (let i = 0; i < select3.length; i++) {
      if (select3[i].checked) {
        console.log(select3[i]);
        setCount3(parseFloat(select3[i].value));
      }
    }

  }

  const [count4, setCount4] = useState();
  var countFee4 = () => {
    setCount4(0);
    let select4 = document.getElementsByName("select4");
    for (let i = 0; i < select4.length; i++) {
      if (select4[i].checked) {
        console.log(select4[i]);
        setCount4(parseFloat(select4[i].value));
      }
    }

  }

  const [count5, setCount5] = useState();
  var countFee5 = () => {
    setCount5(0);
    let select5 = document.getElementsByName("select5");
    for (let i = 0; i < select5.length; i++) {
      if (select5[i].checked) {
        console.log(select5[i]);
        setCount5(parseFloat(select5[i].value));
      }
    }

  }


  const [totalFee, setTotalFee] = useState();
  var countTotalFee = () => {
    setTotalFee((count1 + count2 + count3 + count4 + count5));
    console.log(count1);
    console.log(count2);
    console.log(count3);
    console.log(count4);
    console.log(count5);
    console.log(totalFee);
  }



  // var error_description = new Array(1);
  const [messageDescription, setMessageDescription] = useState();
  const [messageDate, setMessageDate] = useState();
  // const [messageHour, setMessageHour] = useState();


  var nextToPatient = () => {

    if (document.getElementById("date_picker").value === "" || document.getElementById("description_detail").value === "") {
      if (document.getElementById("date_picker").value === "") {
        setMessageDate("H??y ch???n ng??y kh??m!");
      }
      if (document.getElementById("description_detail").value === "") {
        // error_description[0] = "H??y nh???p m?? t???!";
        setMessageDescription("H??y nh???p m?? t???!");
      }
    } 
    // else if (document.getElementById("hour1").clicked === false &&
    //   document.getElementById("hour2").clicked === false &&
    //   document.getElementById("hour3").clicked === false &&
    //   document.getElementById("hour4").clicked === false) {
    //       setMessageHour("H??y ch???n gi??? kh??m!");
    // }
    else {
      document.getElementById("Register").style.display = "none";
      document.getElementById("PatientInfor").style.display = "block";
      countTotalFee();
      // checkEmptyFee();
    }
  }

  var turnToPickdate = () => {
    document.getElementById("date_picker").focus();
  }

  var turnToPickhour = () => {
    if (document.getElementById("date_picker").value === "") {
      document.getElementById("hour_register_without_date").style.display = "block";
      document.getElementById("hour_register_within_date").style.display = "none";
    }
    else {
      document.getElementById("hour_register_without_date").style.display = "none";
      document.getElementById("hour_register_within_date").style.display = "block";
    }

    document.getElementById("hour_register_within_date").focus();
  }


  var backToRegister = () => {
    document.getElementById("Register").style.display = "block";
    document.getElementById("PatientInfor").style.display = "none";
  }


  const [messageName, setMessageName] = useState();
  const [messageDob, setMessageDob] = useState();
  const [messagePhone, setMessagePhone] = useState();
  const [messageGender, setMessageGender] = useState();
  const [messageAddress, setMessageAddress] = useState();

  const [patientName, setPatientName] = useState();

  var nextToSecondpage = () => {
    if (document.getElementById("patient_name").value === "" || document.getElementById("patient_dob").value === "" ||
      document.getElementById("patient_phone") === "" || document.getElementById("patient_gender").value === "auto" ||
      document.getElementById("patient_address").value === "") {
      if (document.getElementById("patient_name").value === "") {
        setMessageName("H??y nh???p h??? v?? t??n!");
      }

      if (document.getElementById("patient_dob").value === "") {
        setMessageDob("H??y nh???p ng??y sinh!");
      }

      if (document.getElementById("patient_phone").value === "") {
        setMessagePhone("H??y nh???p s??? ??i???n tho???i!");
      }

      if (document.getElementById("patient_gender").value === "auto") {
        setMessageGender("H??y ch???n gi???i t??nh!");
      }

      if (document.getElementById("patient_address").value === "") {
        setMessageAddress("H??y nh???p ?????a ch???!");
      }
    }
    else {
      // alert("???? ???n chuy???n qua secondpage");
      document.getElementById("secondpage").style.display = "block";
      document.getElementById("firstpage").style.display = "none";
      setPatientName(document.getElementById("patient_name").value);
    }
  }

  var backToFirstpage = () => {
    document.getElementById("firstpage").style.display = "block";
    document.getElementById("secondpage").style.display = "none";
    document.getElementById("Register").style.display = "block";
    document.getElementById("PatientInfor").style.display = "none";
  }




  return (
    <div className='container'>
      <div className='container_margin_page'>
        <div className='Header'>
          <p>????ng k?? th??ng tin kh??m tr???c tuy???n</p>
        </div>


        <div className="firstpage" id="firstpage">
          <div className="firstpage_hearder">
            <div className=' alert alert-primary alert_margin_side'>
              <p className=''>C??c tr?????ng ????nh d???u <span>*</span> l?? c??c tr?????ng b???t bu???c nh???p. Th??ng tin b???nh nh??n, th??ng tin ????ng k?? kh??m
                c???n nh???p ch??nh x??c</p>
            </div>
          </div>

          <div className="Register" id="Register">
            <div className='container_margin'>
              {/* <div className='caution alert alert-primary'>
                <p className=''>C??c tr?????ng ????nh d???u <span>*</span> l?? c??c tr?????ng b???t bu???c nh???p. Th??ng tin b???nh nh??n, th??ng tin ????ng k?? kh??m
                    c???n nh???p ch??nh x??c</p>
            </div> */}

              <div className='Register_title'>
                <h5>TH??NG TIN ????NG K?? KH??M</h5>
              </div>

              <div>
                <h6>Lo???i d???ch v??? <span>*</span></h6>
              </div>

              <div className='select_type' >
                <button id='btntype1' onClick={setStayFocus1} className='col-md-4 setup' checked type='radio' value='1' name='btn1' >Kh??m d???ch v??? thu ph??</button>
                <button id='btntype2' onClick={setStayFocus2} className='col-md-4 setup' type='radio' >T?? v???n mi???n ph??</button>
                <button id='btntype3' onClick={setStayFocus3} className='col-md-4 setup' type='radio' >Kh??m BHYT</button>

              </div>

              <div className=' alert alert-primary alert_margin_top'>
                <ul>
                  <li>
                    ??i???u ki???n kh??m online: Kh??ch h??ng ???? kh??m t???i b???nh vi???n Ho??n M??? S??i G??n c?? toa thu???c k???t qu??? c???n l??m s??ng c???a chuy??n khoa
                    (k???t qu??? XN, C??HA, ...) g???n nh???t kh??ng qu?? <span>6 th??ng</span>
                  </li>
                  <li>
                    Kh??ch h??ng kh??ng c?? ho???c kh??ng s??? d???ng BHYT
                  </li>
                </ul>

              </div>


              <div className='examine_services'>
                <div className='select_services colum-md-6 col-sm-6 col-xs-6 custom'>
                  <p>D???ch v??? kh??m <span>*</span></p>
                  <form>
                    <div className="multiselect">
                      <div className="selectBox" onClick={showCheckboxes}>
                        <select className='p-2 disable_select' value="Ch???n d???ch v??? kh??m">
                          <option disabled='yes' selected id='temp_option' >Ch???n d???ch v??? kh??m</option>
                        </select>
                        <div id='' className="overSelect">
                          {/*  */}
                          <div id="hohap" className='checkboxes' onChange={() => { countFee1(); countFee2(); countFee3(); countFee4(); countFee5(); }}>
                            <p>H?? h???p</p>
                            <label htmlFor="hohapone">
                              <input type="radio" id="hohapone" name='select1' value='161' />B???nh vi???n ch???n b??c s?? kh??m - 160.000??</label>
                            <label htmlFor="hohaptwo">
                              <input type="radio" id="hohaptwo" name='select1' value='161' />Bs. Ng?? Tu???n Khanh - 160.000??</label>
                            <label htmlFor="hohapthree">
                              <input type="radio" id="hohapthree" name='select1' value='161' />Bs. Tr???n ????nh Thanh - 160.000??</label>
                            <p>Tim m???ch</p>
                            <label htmlFor="timmachone">
                              <input type="radio" id="timmachone" name='select2' value='160' />B???nh vi???n ch???n b??c s?? kh??m - 160.000??</label>
                            <label htmlFor="timmachtwo">
                              <input type="radio" id="timmachtwo" name='select2' value='160' />Bs. L?? D?????ng - 160.000??</label>
                            <label htmlFor="timmachthree">
                              <input type="radio" id="timmachthree" name='select2' value='160' />Bs. Nguy???n Th??? M???c Tr??n - 160.000??</label>
                            <p>S???n ph???</p>
                            <label htmlFor="sanphuone">
                              <input type="radio" id="sanphuone" name='select3' value='200' />B???nh vi???n ch???n b??c s?? kh??m - 200.000??</label>
                            <label htmlFor="sanphutwo">
                              <input type="radio" id="sanphutwo" name='select3' value='200' />Bs. Mai Thu Th???y - 200.000??</label>
                            <label htmlFor="sanphuthree">
                              <input type="radio" id="sanphuthree" name='select3' value='200' />Bs. B??i ?????c L??m - 200.000??</label>
                            <label htmlFor="sanphufour">
                              <input type="radio" id="sanphufour" name='select3' value='200' />Bs. T???ng N??? Ph????ng Th???o - 200.000??</label>
                            <p>N???i ti???t</p>
                            <label htmlFor="noitietone">
                              <input type="radio" id="noitietone" name='select4' value='160' />B???nh vi???n ch???n b??c s?? kh??m - 160.000??</label>
                            <label htmlFor="noitiettwo">
                              <input type="radio" id="noitiettwo" name='select4' value='160' />Bs. Mai Y???n Linh - 160.000??</label>
                            <label htmlFor="noitietthree">
                              <input type="radio" id="noitietthree" name='select4' value='160' />Bs. Nguy???n H???u H??n Ch??u - 160.000??</label>
                            <p>Ti??u h??a</p>
                            <label htmlFor="tieuhoaone">
                              <input type="radio" id="tieuhoaone" name='select5' value='160' />B???nh vi???n ch???n b??c s?? kh??m - 160.000??</label>
                            <label htmlFor="tieuhoatwo">
                              <input type="radio" id="tieuhoatwo" name='select5' value='160' />Bs. Nguy???n Ng???c Thao - 160.000??</label>
                          </div>
                        </div>
                      </div>



                    </div>
                  </form>

                </div>

                <div className='patient_id colum-md-6 col-sm-6 col-xs-6'>
                  <p>M?? s??? b???nh nh??n</p>
                  <input className='custom p-2 col-12 ' type='text' placeholder='Nh???p m?? s??? b???nh nh??n'></input>
                </div>
              </div>

              <div className='time_register'>
                <div className='date_register colum-md-6 col-sm-6 col-xs-6 custom'>
                  <p>Ng??y ????ng k?? kh??m <span>*</span> </p>
                  <input id='date_picker' className='col-12' type='date'
                    onChange={e => {
                      const newMessageDate = '';
                      setMessageDate(newMessageDate);
                      turnToPickhour();
                    }}
                  ></input> {/*  */}
                  <p><span>{messageDate}</span></p>
                </div>

                <div className='hour_register colum-md-6 col-sm-6 col-xs-6 custom'>
                  <p>Th???i gian ????ng k?? kh??m <span>*</span> </p>
                  <div>
                    <div id='hour_register_without_date' className='hour_register_without_date text-center col-12' >
                      <button onClick={turnToPickdate}>Ch???n ng??y ????ng k?? kh??m</button>
                    </div>

                    <div id='hour_register_within_date' className='hour_register_within_date text-center col-12'>
                      <div className='row custom_hour'
                        // onChange={e => {
                        //   const newMessageDate = '';
                        //   setMessageDate(newMessageDate);
                        //   turnToPickhour();
                        // }}
                        >
                        <button id='hour1' onClick={focusHour1} className='btnHour colum-md-2 col-sm-2 col-xs-2'>13h - 14h</button>
                        <button id='hour2' onClick={focusHour2} className='btnHour colum-md-2 col-sm-2 col-xs-2'>14h - 15h</button>
                        <button id='hour3' onClick={focusHour3} className='btnHour colum-md-2 col-sm-2 col-xs-2'>15h - 16h</button>
                        <button id='hour4' onClick={focusHour4} className='btnHour colum-md-2 col-sm-2 col-xs-2'>16h - 17h</button>
                        {/* <p><span>{messageHour}</span></p> */}

                      </div>

                    </div>

                  </div>


                </div>
              </div>

              <div className='description'>
                <div className='col-md-12'>
                  <p>M?? t??? <span>*</span></p>
                  <textarea className='col-12 p-3' id='description_detail' placeholder='Nh???p tri???u ch???ng, l?? do kh??m'
                    onChange={e => {
                      const newMessageDescription = '';
                      setMessageDescription(newMessageDescription);
                    }}
                  ></textarea>
                  {/* <script>
                    if(!isEmpty(error_description)){
                      <p><span>{error_description[0]}</span></p>
                    }
                  </script> */}
                  <p><span>{messageDescription}</span></p>

                </div>

              </div>

              <div className='row hang justify-content-center mt-3 '>

                {/* <input id='inputFile' name='inputFile' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom' type='submit' value='????nh k??m t??i li???u'></input> */}

                <label id='inputFile' name='inputFile' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom'>
                  ????nh k??m t??i li???u
                  <input type="file" className='d-none' />
                </label>


                {/* <input className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage' type='submit' value='Ti???p theo'></input> */}
                <button className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage' value='Ti???p theo' onClick={nextToPatient}>Ti???p theo</button>
                {/* <Link
                  className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage'
                  to='/PatientInfor'
                >
                  Ti???p theo
                </Link> */}


              </div>

            </div>
          </div>

          <div className="PatientInfor" id="PatientInfor">
            <div className='container_margin'>
              <div className='PatientInfor_title'>
                <h5>TH??NG TIN B???NH NH??N</h5>
              </div>

              <div className='name_and_dob margin_row'>
                <div className='patient_name colum-md-6 col-sm-6 col-xs-6'>
                  <p>H??? v?? t??n <span>*</span></p>
                  <input id='patient_name' type='text' placeholder='Nh???p h??? t??n'
                    onChange={e => {
                      const newMessageName = '';
                      setMessageName(newMessageName);
                    }}
                  ></input>
                  <p><span>{messageName}</span></p>
                </div>

                <div className='patient_dob colum-md-6 col-sm-6 col-xs-6'>
                  <p>Ng??y sinh <span>*</span></p>
                  <input id='patient_dob' type='date'
                    onChange={e => {
                      const newMessageDob = '';
                      setMessageDob(newMessageDob);
                    }}
                  ></input>
                  <p><span>{messageDob}</span></p>
                </div>
              </div>

              <div className='phone_and_gender margin_row'>
                <div className='patient_phone colum-md-6 col-sm-6 col-xs-6'>
                  <p>S??? ??i???n tho???i <span>*</span></p>
                  <input id='patient_phone' type='tel' placeholder='Nh???p s??? ??i???n tho???i'
                    onChange={e => {
                      const newMessagePhone = '';
                      setMessagePhone(newMessagePhone);
                    }}
                  ></input>
                  <p><span>{messagePhone}</span></p>
                </div>

                <div className='patient_gender colum-md-6 col-sm-6 col-xs-6'>
                  <p>Gi???i t??nh <span>*</span></p>
                  <select id='patient_gender'
                    onChange={e => {
                      const newMessageGender = '';
                      setMessageGender(newMessageGender);
                    }}
                  >
                    <option disabled selected value='auto'>Ch???n gi???i t??nh</option>
                    <option>Nam</option>
                    <option>N???</option>
                    <option>Kh??c</option>
                  </select>
                  <p><span>{messageGender}</span></p>
                </div>
              </div>

              <div className='patient_address col-md-12 margin_row'>
                <p>?????a ch??? <span>*</span></p>
                <textarea id='patient_address' className='p-3' placeholder='Nh???p ?????a ch???'
                  onChange={e => {
                    const newMessageAddress = '';
                    setMessageAddress(newMessageAddress);
                  }}
                ></textarea>
                <p><span>{messageAddress}</span></p>
              </div>

              <div className='row hang justify-content-center mt-3 '>
                {/* <input className='col-md-3 col-sm-5 col-xs-5 p-3 turnback custom ' type='submit' value='Quay l???i'></input> */}
                <button className='col-md-3 col-sm-5 col-xs-5 p-3 turnback custom ' type='submit' value='Quay l???i' onClick={backToRegister}>Quay l???i</button>

                <button className='col-md-3 col-sm-5 col-xs-5 p-3 finalstep' type='submit' value='????ng k?? kh??m' onClick={nextToSecondpage}>????ng k?? kh??m</button>
              </div>
            </div>

          </div>


        </div>

        <div className="secondpage" id="secondpage">
          <img src={require("./success.png")} alt='???nh x??c nh???n' width={150} height={150}></img>
          <p id="bigFont">????ng k?? kh??m th??nh c??ng</p>
          <p>Vui l??ng n???p ph?? kh??m: <span>{totalFee}.000??</span></p>
          <p>S??? t??i kho???n: <span>0531000333888</span></p>
          <p>Ch??? t??i kho???n: <span>C??ng ty C??? ph???n B???nh vi???n ??a Khoa Ho??n M??? S??i G??n</span></p>
          <p>Ng??n h??ng: <span>Ng??n h??ng VCB - CN ????ng S??i G??n</span></p>
          <p>N???i dung chuy???n kho???n: <span>BN {patientName} TT tien kham benh tu xa chuyen khoa Chan thuong chinh hinh Co xuong khop</span></p>


          <div className='row hang justify-content-center mt-3 '>
            {/* <input id="" className='col-3 col-md-3 col-sm-5 col-xs-5 p-3 custom' type="submit" value="????nh k??m thu ph??"></input> */}
            <label id='payfee' name='payfee' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom'>
              ????nh k??m thu ph??
              <input type="file" className='d-none' />
            </label>
            <button id="completefee" className='col-3 col-md-3 col-sm-5 col-xs-5 p-3' type="submit" value="Ho??n th??nh ph?? kh??m" onClick={backToFirstpage}>Ho??n th??nh ph?? kh??m</button>
          </div>



          <div className='smallFont'>
            <p>Vui l??ng chuy???n kho???n ph?? d???ch v??? kh??m ????nh k??m bi??n lai thu ph??, x??c nh???n trong 10 ph??t</p>
            <p>Trong tr?????ng h???p b???nh nh??n ch??a chuy???n kho???n ph?? kh??m trong th???i gian quy ?????nh, h??? th???ng s??? chuy???n ?????i d???ch v??? kh??m ???? ????ng k?? sang t?? v???n mi???n ph?? <span id="red_span">06:58</span></p>

            <br></br>

            <p>B??? ph???n h??? tr??? s??? li??n l???c ????? x??c nh???n th??ng tin ????ng k?? trong v??ng 24h</p>
            <p>M???i th???c m???c vui l??ng li??n h??? s??? ??i???n tho???i <span id="green_span">09825456854</span> ????? ???????c h??? tr??? x??? l??</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App;
