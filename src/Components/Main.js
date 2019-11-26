import React, { Component } from "react";
import { Upload, message, Icon, Table, Result, Modal, Layout } from "antd";
import readXlsxFile from "read-excel-file";
import { Helmet } from "react-helmet";
import "antd/dist/antd.css";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      Vendeurs: [],
      Status: "info",
      TitleStatus: "Veuillez patienter ",
      percent: 0,
      title: "Sku/Facutre"
    };
  }

  addProgress(k, l) {
    let tempPercent = (k / l) * 100;
    this.setState({
      percent: tempPercent,
      TitleStatus: "Fichier est encour de traitement",
      ModalVisible: false
    });
  }

  handleFileUpload = async info => {
    let Selsman = [];
    let Products = [];
    let Invocies = [];
    let TotalInvocies = [];
    let TotalCreditNote = [];
    let CreditNote = [];
    let Total = [];
    const { status } = info.file;
    if (status !== "uploading") {
      message.info(`Debut de la lecture`);
      this.setState({ ModalVisible: true });
      readXlsxFile(info.file).then(rows => {
        let k = 1;
        let TotalPercent = rows.length;
        rows.forEach(row => {
          if (row[10] != null && row[10] != "* Salesman") {
            Selsman.push(row[10]);
          }
          k++;
        });
        const sleep = milliseconds => {
          return new Promise(resolve => setTimeout(resolve, milliseconds));
        };

        this.setState({ TitleStatus: "Lecture terminer" });
        sleep(500);
        this.addProgress(0, 1);
        Selsman = [...new Set(Selsman)];
        rows.forEach(row => {
          if (row[5] !== null && row[5] !== "Transaction Type") {
            Invocies.push(row[5]);
          }
        });
        Invocies = [...new Set(Invocies)];
        //console.log(Products);
        message.info(`Recherche Des vendeurs`);
        Selsman.forEach(seller => {
          Total.push({
            vendeur: seller,
            NombreFacture: 0,
            NombreFactureUnique: 0,
            NombreCreditNote: 0,
            NombreRetour: 0,
            SkuParFacture: 0.0
          });
        });
        let i = 0;
        message.info(`Calcules des SKU/Facture`);

        Selsman.forEach(seller => {
          this.addProgress(i, seller.length);
          let tempInvoices = [];
          let tempCreditNotes = [];
          Invocies.forEach(invoice => {
            rows.forEach(row => {
              //console.log(row);
              if (seller == row[10]) {
                if (invoice == row[5]) {
                  if (row[4] === "Invoice") {
                    Total[i].NombreFacture += 1;
                    tempInvoices.push(row[5]);
                  } else {
                    Total[i].NombreRetour += 1;
                    tempCreditNotes.push(row[5]);
                  }
                }
              }
            });

            tempInvoices = [...new Set(tempInvoices)];
            tempCreditNotes = [...new Set(tempCreditNotes)];

            Total[i].NombreFactureUnique = tempInvoices.length;
            Total[i].NombreCreditNote = tempCreditNotes.length;
          });
          i++;
        });
        let FinalVendeur = [];

        Total.forEach(vendeur => {
          vendeur.SkuParFacture =
            (vendeur.NombreFacture - vendeur.NombreRetour) /
            (vendeur.NombreFactureUnique - vendeur.NombreCreditNote);
          FinalVendeur.push({
            Vendeur: vendeur.vendeur,
            SkuParFacture: vendeur.SkuParFacture
          });
        });
        this.setState({
          Status: "success",
          TitleStatus: "Terminer ! ",
          Vendeurs: FinalVendeur,
          title: "Terminé"
        });
        message.success(`Terminer`);
        this.setState({ ModalVisible: false });
      });
    }
  };

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const columns = [
      {
        title: "Vendeur",
        dataIndex: "Vendeur",
        key: "Vendeur"
      },

      {
        title: "SKU/Facture",
        dataIndex: "SkuParFacture",
        key: "SkuParFacture"
      }
    ];
    const { Dragger } = Upload;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Layout>
          <Content>
            <Dragger
              name="file"
              onChange={e => {
                this.handleFileUpload(e);
              }}
              beforeUpload={() => {
                return false;
              }}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Appuier ici ou deplacer le fichier ici
              </p>
              <p className="ant-upload-hint"></p>
            </Dragger>

            <Table columns={columns} dataSource={this.state.Vendeurs}></Table>
          </Content>
        </Layout>
        <Modal
          title="En cours de traitement"
          visible={this.state.ModalVisible}
          cancelButtonProps={{ disabled: true }}
          okButtonProps={{ disabled: true }}
        >
          <Result
            status={this.state.Status}
            title={this.state.TitleStatus}
          ></Result>
        </Modal>
      </>
    );
  }
}
