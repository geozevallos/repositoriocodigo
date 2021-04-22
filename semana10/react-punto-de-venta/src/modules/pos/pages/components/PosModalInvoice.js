import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import PosContext from "../../../../context/posContext";

const PosModalInvoice = ({ mostrar, setMostrar }) => {
  const { pedidos, objMesaGlobal } = useContext(PosContext);

  let objPedidoActual = pedidos.find(
    (objPedido) => objPedido.mesa_id === objMesaGlobal.mesa_id
  );

  return objPedidoActual ? (
    <Modal
      show={mostrar}
      onHide={() => {
        setMostrar(false);
      }}
      size={"xl"}
    >
      <Modal.Header closeButton>
        <Modal.Title>Boleta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container">
          <div class="col-md-12">
            <div class="invoice">
              <div class="invoice-company text-inverse f-w-600">
                Company Name, Inc
              </div>
              <div class="invoice-header">
                <div class="invoice-from">
                  <small>from</small>
                  <address class="m-t-5 m-b-5">
                    <strong class="text-inverse">Twitter, Inc.</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
                <div class="invoice-to">
                  <small>to</small>
                  <address class="m-t-5 m-b-5">
                    <strong class="text-inverse">Company Name</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
                <div class="invoice-date">
                  <small>Invoice / July period</small>
                  <div class="date text-inverse m-t-5">August 3,2012</div>
                  <div class="invoice-detail">
                    #0000123DSS
                    <br />
                    Services Product
                  </div>
                </div>
              </div>

              <div className="invoice-content">
                <div className="table-responsive">
                  <table className="table table-invoice">
                    <thead>
                      <tr>
                        <th>TASK DESCRIPTION</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Descripción</th>
                        <th className="text-right">Precio Unitario</th>
                        <th className="text-right">Precio Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {objPedidoActual.platos.map((objPlato, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td class="text-center">{objPlato.plato_cant}</td>
                            <td class="text-center">{objPlato.plato_nom}</td>
                            <td class="text-right">S/{objPlato.plato_pre}</td>
                            <td class="text-right">
                              S/{+objPlato.plato_cant * +objPlato.plato_cant}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div class="invoice-price">
                  <div class="invoice-price-left">
                    <div class="invoice-price-row">
                      <div class="sub-price">
                        <small>SUBTOTAL</small>
                        <span class="text-inverse">$4,500.00</span>
                      </div>
                      <div class="sub-price">
                        <i class="fa fa-plus text-muted"></i>
                      </div>
                      <div class="sub-price">
                        <small>PAYPAL FEE (5.4%)</small>
                        <span class="text-inverse">$108.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="invoice-price-right">
                    <small>TOTAL</small> <span class="f-w-600">$4508.00</span>
                  </div>
                </div>
              </div>

              <div class="invoice-note">
                * Make all cheques payable to [Your Company Name]
                <br />
                * Payment is due within 30 days
                <br />* If you have any questions concerning this invoice,
                contact [Name, Phone Number, Email]
              </div>

              <div class="invoice-footer">
                <p class="text-center m-b-5 f-w-600">
                  THANK YOU FOR YOUR BUSINESS
                </p>
                <p class="text-center">
                  <span class="m-r-10">
                    <i class="fa fa-fw fa-lg fa-globe"></i> matiasgallipoli.com
                  </span>
                  <span class="m-r-10">
                    <i class="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                    T:016-18192302
                  </span>
                  <span class="m-r-10">
                    <i class="fa fa-fw fa-lg fa-envelope"></i> rtiemps@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  ) : null;
};

export default PosModalInvoice;
