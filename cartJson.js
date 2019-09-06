// addProd(evt) {
  // let table, row, cell1, cell2, cell3, letJsonSno = 0, letJsonProduct = "";
  // if (evt == undefined) {
  //   for (let i in letJSONObj) {
  //     table = document.getElementById("myTable");
  //     row = table.insertRow();
  //     cell1 = row.insertCell();
  //     cell2 = row.insertCell();
  //     cell3 = row.insertCell();

  //     letJsonSno = letJSONObj[i].sno;
  //     letJsonProduct = letJSONObj[i].product;
  //     cell1.innerHTML = letJsonSno;
  //     cell2.innerHTML = letJsonProduct;
  //     cell3.innerHTML = '<button id = ' + letJsonSno + '>Add to cart</button>';
  //     document.getElementById(letJsonSno).addEventListener("click", this.addCart)
  //     row.setAttribute("id", letJsonSno);
  //   }
  // }
  // if (evt != undefined) {
  //   // console.log(evt)
  //   let rowval = document.getElementById(evt.target.id).getElementsByTagName('td');
  //   // console.log(evtId)
  //   let evtId = rowval[0].innerText;
  //   // console.log(evtId)
  //   let letPrdName = rowval[1].innerText
  //   this.setState({
  //     letProdId: evtId
  //   })
  //   let removeProd = document.getElementById(this.state.letProdId);
  //   removeProd.parentNode.removeChild(removeProd);

  //   table = document.getElementById("myTable");
  //   row = table.insertRow();
  //   cell1 = row.insertCell();
  //   cell2 = row.insertCell();
  //   cell3 = row.insertCell();
  //   cell1.innerHTML = evtId;
  //   cell2.innerHTML = letPrdName;
  //   cell3.innerHTML = '<button id = ' + evtId + ' value = ' + letJsonProduct + '>Add to cart</button>';
  //   // letProdLen = JSON.parse(values)
  //   document.getElementById(evtId).addEventListener("click", this.addCart)
  //   row.setAttribute("id", evtId);

  // }
  // }

  // addCart(evt) {
  //   var rowval = document.getElementById(evt.target.id).getElementsByTagName('td');
  //   // let letId = rowval[0].innerText;
  //   let letPrdName = rowval[1].innerText
  //   let letProdId, removeProd, table, row, cell1, cell2, cell3;
  //   letProdId = rowval[0].innerText;

  //   removeProd = document.getElementById(letProdId);
  //   removeProd.parentNode.removeChild(removeProd);

  //   table = document.getElementById("deleteCart");
  //   row = table.insertRow();
  //   cell1 = row.insertCell();
  //   cell2 = row.insertCell();
  //   cell3 = row.insertCell();

  //   row.setAttribute("id", letProdId);
  //   cell1.innerHTML = letProdId;
  //   cell2.innerHTML = letPrdName;
  //   cell3.innerHTML = '<button id = ' + letProdId + '>Delete cart</button>';
  //   document.getElementById(letProdId).addEventListener("click", this.addProd)

  // }

render

 {/* <button id="btnAdd" onClick={() => this.addProd()}>Add Products</button>
        <table id="myTable"> */}
        {/*test = document.getElementById("8").children[2].innerText

        test = document.getElementById("8").children[3] */}
        {/* <tbody>
            <tr>
              <th>Sno</th>
              <th>Products</th>
              <th>Action</th>
            </tr>
          </tbody>
        </table>
        <p>
          Products added to cart
                </p>
        <table id="deleteCart">
          <tbody>

            <tr>
              <th>Sno</th>
              <th>Products</th>
              <th>Action</th>

            </tr>
          </tbody>

        </table> */}
