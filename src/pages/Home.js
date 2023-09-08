import { useMemo, useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../components/globalVars";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsTable from "../components/ProductsList";

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
                    }
                ],
            }
        ],
        []
    )

    useEffect(() => {
        async function loadData() {
            const result = await axios.get(BASE_URL + 'api/products/products');
            setData(result.data.data);
        }
        loadData();
    }, []);

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
                //loaddata
            })
            .catch((err) => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });
        setSelectedFiles(undefined);
    };

    return (
        <div>
            <Header />
            <div>
                {currentFile && (
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: progress + "%" }}
                        >
                            {progress}%
                        </div>
                    </div>
                )}

                <label className="btn btn-default">
                    <input type="file" onChange={selectFile} />
                </label>

                <button
                    className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={upload}
                >
                    Upload
                </button>

                <div className="alert alert-light" role="alert">
                    {message}
                </div>
                <div>
                    <ProductsTable columns={columns} data={data} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;