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
        setMessageDate("Hãy chọn ngày khám!");
      }
      if (document.getElementById("description_detail").value === "") {
        // error_description[0] = "Hãy nhập mô tả!";
        setMessageDescription("Hãy nhập mô tả!");
      }
    } 
    // else if (document.getElementById("hour1").clicked === false &&
    //   document.getElementById("hour2").clicked === false &&
    //   document.getElementById("hour3").clicked === false &&
    //   document.getElementById("hour4").clicked === false) {
    //       setMessageHour("Hãy chọn giờ khám!");
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
        setMessageName("Hãy nhập họ và tên!");
      }

      if (document.getElementById("patient_dob").value === "") {
        setMessageDob("Hãy nhập ngày sinh!");
      }

      if (document.getElementById("patient_phone").value === "") {
        setMessagePhone("Hãy nhập số điện thoại!");
      }

      if (document.getElementById("patient_gender").value === "auto") {
        setMessageGender("Hãy chọn giới tính!");
      }

      if (document.getElementById("patient_address").value === "") {
        setMessageAddress("Hãy nhập địa chỉ!");
      }
    }
    else {
      // alert("đã ấn chuyển qua secondpage");
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
          <p>Đăng ký thông tin khám trực tuyến</p>
        </div>


        <div className="firstpage" id="firstpage">
          <div className="firstpage_hearder">
            <div className=' alert alert-primary alert_margin_side'>
              <p className=''>Các trường đánh dấu <span>*</span> là các trường bắt buộc nhập. Thông tin bệnh nhân, thông tin đăng ký khám
                cần nhập chính xác</p>
            </div>
          </div>

          <div className="Register" id="Register">
            <div className='container_margin'>
              {/* <div className='caution alert alert-primary'>
                <p className=''>Các trường đánh dấu <span>*</span> là các trường bắt buộc nhập. Thông tin bệnh nhân, thông tin đăng ký khám
                    cần nhập chính xác</p>
            </div> */}

              <div className='Register_title'>
                <h5>THÔNG TIN ĐĂNG KÝ KHÁM</h5>
              </div>

              <div>
                <h6>Loại dịch vụ <span>*</span></h6>
              </div>

              <div className='select_type' >
                <button id='btntype1' onClick={setStayFocus1} className='col-md-4 setup' checked type='radio' value='1' name='btn1' >Khám dịch vụ thu phí</button>
                <button id='btntype2' onClick={setStayFocus2} className='col-md-4 setup' type='radio' >Tư vấn miễn phí</button>
                <button id='btntype3' onClick={setStayFocus3} className='col-md-4 setup' type='radio' >Khám BHYT</button>

              </div>

              <div className=' alert alert-primary alert_margin_top'>
                <ul>
                  <li>
                    Điều kiện khám online: Khách hàng đã khám tại bệnh viện Hoàn Mỹ Sài Gòn có toa thuốc kết quả cận lâm sàng của chuyên khoa
                    (kết quả XN, CĐHA, ...) gần nhất không quá <span>6 tháng</span>
                  </li>
                  <li>
                    Khách hàng không có hoặc không sử dụng BHYT
                  </li>
                </ul>

              </div>


              <div className='examine_services'>
                <div className='select_services colum-md-6 col-sm-6 col-xs-6 custom'>
                  <p>Dịch vụ khám <span>*</span></p>
                  <form>
                    <div className="multiselect">
                      <div className="selectBox" onClick={showCheckboxes}>
                        <select className='p-2 disable_select' value="Chọn dịch vụ khám">
                          <option disabled='yes' selected id='temp_option' >Chọn dịch vụ khám</option>
                        </select>
                        <div id='' className="overSelect">
                          {/*  */}
                          <div id="hohap" className='checkboxes' onChange={() => { countFee1(); countFee2(); countFee3(); countFee4(); countFee5(); }}>
                            <p>Hô hấp</p>
                            <label htmlFor="hohapone">
                              <input type="radio" id="hohapone" name='select1' value='161' />Bệnh viện chọn bác sĩ khám - 160.000đ</label>
                            <label htmlFor="hohaptwo">
                              <input type="radio" id="hohaptwo" name='select1' value='161' />Bs. Ngô Tuấn Khanh - 160.000đ</label>
                            <label htmlFor="hohapthree">
                              <input type="radio" id="hohapthree" name='select1' value='161' />Bs. Trần Đình Thanh - 160.000đ</label>
                            <p>Tim mạch</p>
                            <label htmlFor="timmachone">
                              <input type="radio" id="timmachone" name='select2' value='160' />Bệnh viện chọn bác sĩ khám - 160.000đ</label>
                            <label htmlFor="timmachtwo">
                              <input type="radio" id="timmachtwo" name='select2' value='160' />Bs. Lê Dưỡng - 160.000đ</label>
                            <label htmlFor="timmachthree">
                              <input type="radio" id="timmachthree" name='select2' value='160' />Bs. Nguyễn Thị Mộc Trân - 160.000đ</label>
                            <p>Sản phụ</p>
                            <label htmlFor="sanphuone">
                              <input type="radio" id="sanphuone" name='select3' value='200' />Bệnh viện chọn bác sĩ khám - 200.000đ</label>
                            <label htmlFor="sanphutwo">
                              <input type="radio" id="sanphutwo" name='select3' value='200' />Bs. Mai Thu Thủy - 200.000đ</label>
                            <label htmlFor="sanphuthree">
                              <input type="radio" id="sanphuthree" name='select3' value='200' />Bs. Bùi Đức Lâm - 200.000đ</label>
                            <label htmlFor="sanphufour">
                              <input type="radio" id="sanphufour" name='select3' value='200' />Bs. Tống Nữ Phương Thảo - 200.000đ</label>
                            <p>Nội tiết</p>
                            <label htmlFor="noitietone">
                              <input type="radio" id="noitietone" name='select4' value='160' />Bệnh viện chọn bác sĩ khám - 160.000đ</label>
                            <label htmlFor="noitiettwo">
                              <input type="radio" id="noitiettwo" name='select4' value='160' />Bs. Mai Yến Linh - 160.000đ</label>
                            <label htmlFor="noitietthree">
                              <input type="radio" id="noitietthree" name='select4' value='160' />Bs. Nguyễn Hữu Hàn Châu - 160.000đ</label>
                            <p>Tiêu hóa</p>
                            <label htmlFor="tieuhoaone">
                              <input type="radio" id="tieuhoaone" name='select5' value='160' />Bệnh viện chọn bác sĩ khám - 160.000đ</label>
                            <label htmlFor="tieuhoatwo">
                              <input type="radio" id="tieuhoatwo" name='select5' value='160' />Bs. Nguyễn Ngọc Thao - 160.000đ</label>
                          </div>
                        </div>
                      </div>



                    </div>
                  </form>

                </div>

                <div className='patient_id colum-md-6 col-sm-6 col-xs-6'>
                  <p>Mã số bệnh nhân</p>
                  <input className='custom p-2 col-12 ' type='text' placeholder='Nhập mã số bệnh nhân'></input>
                </div>
              </div>

              <div className='time_register'>
                <div className='date_register colum-md-6 col-sm-6 col-xs-6 custom'>
                  <p>Ngày đăng ký khám <span>*</span> </p>
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
                  <p>Thời gian đăng ký khám <span>*</span> </p>
                  <div>
                    <div id='hour_register_without_date' className='hour_register_without_date text-center col-12' >
                      <button onClick={turnToPickdate}>Chọn ngày đăng ký khám</button>
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
                  <p>Mô tả <span>*</span></p>
                  <textarea className='col-12 p-3' id='description_detail' placeholder='Nhập triệu chứng, lý do khám'
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

                {/* <input id='inputFile' name='inputFile' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom' type='submit' value='Đính kèm tài liệu'></input> */}

                <label id='inputFile' name='inputFile' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom'>
                  Đính kèm tài liệu
                  <input type="file" className='d-none' />
                </label>


                {/* <input className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage' type='submit' value='Tiếp theo'></input> */}
                <button className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage' value='Tiếp theo' onClick={nextToPatient}>Tiếp theo</button>
                {/* <Link
                  className='col-md-3 col-sm-5 col-xs-5 p-3 nextPage'
                  to='/PatientInfor'
                >
                  Tiếp theo
                </Link> */}


              </div>

            </div>
          </div>

          <div className="PatientInfor" id="PatientInfor">
            <div className='container_margin'>
              <div className='PatientInfor_title'>
                <h5>THÔNG TIN BỆNH NHÂN</h5>
              </div>

              <div className='name_and_dob margin_row'>
                <div className='patient_name colum-md-6 col-sm-6 col-xs-6'>
                  <p>Họ và tên <span>*</span></p>
                  <input id='patient_name' type='text' placeholder='Nhập họ tên'
                    onChange={e => {
                      const newMessageName = '';
                      setMessageName(newMessageName);
                    }}
                  ></input>
                  <p><span>{messageName}</span></p>
                </div>

                <div className='patient_dob colum-md-6 col-sm-6 col-xs-6'>
                  <p>Ngày sinh <span>*</span></p>
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
                  <p>Số điện thoại <span>*</span></p>
                  <input id='patient_phone' type='tel' placeholder='Nhập số điện thoại'
                    onChange={e => {
                      const newMessagePhone = '';
                      setMessagePhone(newMessagePhone);
                    }}
                  ></input>
                  <p><span>{messagePhone}</span></p>
                </div>

                <div className='patient_gender colum-md-6 col-sm-6 col-xs-6'>
                  <p>Giới tính <span>*</span></p>
                  <select id='patient_gender'
                    onChange={e => {
                      const newMessageGender = '';
                      setMessageGender(newMessageGender);
                    }}
                  >
                    <option disabled selected value='auto'>Chọn giới tính</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                  <p><span>{messageGender}</span></p>
                </div>
              </div>

              <div className='patient_address col-md-12 margin_row'>
                <p>Địa chỉ <span>*</span></p>
                <textarea id='patient_address' className='p-3' placeholder='Nhập địa chỉ'
                  onChange={e => {
                    const newMessageAddress = '';
                    setMessageAddress(newMessageAddress);
                  }}
                ></textarea>
                <p><span>{messageAddress}</span></p>
              </div>

              <div className='row hang justify-content-center mt-3 '>
                {/* <input className='col-md-3 col-sm-5 col-xs-5 p-3 turnback custom ' type='submit' value='Quay lại'></input> */}
                <button className='col-md-3 col-sm-5 col-xs-5 p-3 turnback custom ' type='submit' value='Quay lại' onClick={backToRegister}>Quay lại</button>

                <button className='col-md-3 col-sm-5 col-xs-5 p-3 finalstep' type='submit' value='Đăng ký khám' onClick={nextToSecondpage}>Đăng ký khám</button>
              </div>
            </div>

          </div>


        </div>

        <div className="secondpage" id="secondpage">
          <img src={require("./success.png")} alt='Ảnh xác nhận' width={150} height={150}></img>
          <p id="bigFont">Đăng ký khám thành công</p>
          <p>Vui lòng nộp phí khám: <span>{totalFee}.000đ</span></p>
          <p>Số tài khoản: <span>0531000333888</span></p>
          <p>Chủ tài khoản: <span>Công ty Cổ phần Bệnh viện Đa Khoa Hoàn Mỹ Sài Gòn</span></p>
          <p>Ngân hàng: <span>Ngân hàng VCB - CN Đông Sài Gòn</span></p>
          <p>Nội dung chuyển khoản: <span>BN {patientName} TT tien kham benh tu xa chuyen khoa Chan thuong chinh hinh Co xuong khop</span></p>


          <div className='row hang justify-content-center mt-3 '>
            {/* <input id="" className='col-3 col-md-3 col-sm-5 col-xs-5 p-3 custom' type="submit" value="Đính kèm thu phí"></input> */}
            <label id='payfee' name='payfee' className=' col-md-3 col-sm-5 col-xs-5 p-3 getFile custom'>
              Đính kèm thu phí
              <input type="file" className='d-none' />
            </label>
            <button id="completefee" className='col-3 col-md-3 col-sm-5 col-xs-5 p-3' type="submit" value="Hoàn thành phí khám" onClick={backToFirstpage}>Hoàn thành phí khám</button>
          </div>



          <div className='smallFont'>
            <p>Vui lòng chuyển khoản phí dịch vụ khám đính kèm biên lai thu phí, xác nhận trong 10 phút</p>
            <p>Trong trường hợp bệnh nhân chưa chuyển khoản phí khám trong thời gian quy định, hệ thống sẽ chuyển đổi dịch vụ khám đã đăng ký sang tư vấn miễn phí <span id="red_span">06:58</span></p>

            <br></br>

            <p>Bộ phận hỗ trợ sẽ liên lạc để xác nhận thông tin đăng ký trong vòng 24h</p>
            <p>Mọi thắc mắc vui lòng liên hệ số điện thoại <span id="green_span">09825456854</span> để được hỗ trợ xử lý</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App;
