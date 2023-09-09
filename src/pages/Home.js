import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

import { BASE_URL } from "../components/globalVars";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsTable from "../components/ProductsList";
import { AtualizarButton, ButtonsContainer, FileInputLabel, HomeBody, MessageAlert, UploadButton, UploadContainer, ValidationButton } from "../components/globalStyles";

const uploadToServer = (file, onUploadProgress) => {
    let formData = new FormData();
    formData.append('file', file);

    return axios.post(BASE_URL + 'api/files/csv/upload', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const Home = () => {

    const [data, setData] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);

    const columns = useMemo(
        () => [
            {
                Header: "Product Details",
                columns: [
                    {
                        Header: "Codigo",
                        accessor: "code"
                    },
                    {
                        Header: "Nome",
                        accessor: "name"
                    },
                    {
                        Header: "Preço de Custo",
                        accessor: "cost_price",
                    },
                    {
                        Header: "Preço de Venda",
                        accessor: "sales_price"
                    },
                    {
                        Header: "Mensagem",
                        accessor: "message"
                    }
                ],
            }
        ],
        []
    )

    useEffect(() => {
        async function loadData() {
            if (loading) {
                const result = await axios.get(BASE_URL + 'api/products/products');
                setData(result.data.data);
                setLoading(false);
            }
        }
        loadData();
    }, [loading]);

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    }

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        uploadToServer(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then(async (response) => {
                setMessage(response.data.message);
                setData(response.data.data[0]);
            })
            .catch((err) => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });
        setSelectedFiles(undefined);
    };

    const validation = async () => {
        if (currentFile === undefined) {
            alert('Sem Arquivo CSV carregado');
        } else {
            let response = await axios.get(BASE_URL + 'api/files/csv/validate');
            let validateMessage = response.data.message;
            if (validateMessage !== 'Ok.') {
                setValid(false);
            } else {
                setValid(true);
            }
        }
    }

    const atualizar = async () => {
        let response = await axios.post(BASE_URL + 'api/files/csv/update');
        alert(response.data.message);
        setProgress(0);
        setMessage("");
        setCurrentFile(undefined);
        setSelectedFiles(undefined);
        setValid(false);
        setLoading(true);
    }

    return (
        <div>
            <Header />
            <HomeBody>
                {currentFile && (
                    <ProgressBar completed={progress} />
                )}
                <UploadContainer>
                    <FileInputLabel>
                        <input type="file" onChange={selectFile} />
                    </FileInputLabel>

                    <UploadButton
                        disabled={!selectedFiles}
                        onClick={() => upload()}
                    >
                        Upload
                    </UploadButton>

                    <MessageAlert>
                        {message}
                    </MessageAlert>
                </UploadContainer>
                <div>
                    <ProductsTable columns={columns} data={data} />
                </div>

                <ButtonsContainer>
                    <ValidationButton onClick={() => validation()}>
                        Validar
                    </ValidationButton>
                    <AtualizarButton
                        disabled={!valid}
                        onClick={() => atualizar()}
                    >
                        Atualizar
                    </AtualizarButton>
                </ButtonsContainer>

            </HomeBody>
            <Footer />
        </div>
    )
}

export default Home;