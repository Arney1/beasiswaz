import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import NavMenu from "@/Components/NavMenu";
import { Inertia } from "@inertiajs/inertia";
import Lottie from "lottie-react";
import animationData from "../../../public/build/assets/animation_logjfep6.json";
import animationData2 from "../../../public/build/assets/animation_logkbp9s.json";

export default function Daftar(props) {
    // const [nama, setNama] = useState(props.auth.user.name);
    // const [nim, setNim] = useState(props.auth.user.nim);
    // const [nohp, setNohp] = useState(props.auth.user.nohp);
    // const [email, setEmail] = useState(props.auth.user.email);
    // const [semester, setSemester] = useState("1");
    // const [ipk, setIpk] = useState(props.auth.user.ipk);
    // const [pilihan, setPilihan] = useState("Akademik");
    // const [berkas, setBerkas] = useState([]);

    function button() {
        if (props.auth.user.ipk > 3.0) {

            return (
                
                <button className="btn btn-success" type="submit">
                    Daftar
                </button>
            );
        } else {
            return (
                <button className="btn btn-success disabled" disabled>
                    Daftar
                </button>
            );
        }
    }

    // const handleSubmit = () => {
    //     const data = {
    //         nim,
    //         nama,
    //         email,
    //         nohp,
    //         semester,
    //         ipk,
    //         pilihan,
    //         berkas,
    //     };
    //     Inertia.post("/beasiswa", data);
    // };

    const { data, setData, errors, post, progress } = useForm({
        nama: props.auth.user.name,
        nim: props.auth.user.nim,
        email: props.auth.user.email,
        nohp: props.auth.user.nohp,
        semester: 1,
        ipk: props.auth.user.ipk,
        pilihan: "Akademik",

        file: null,
    });
    function handleSubmit(e) {
        e.preventDefault();

        post(route("beasiswa.add"));
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar
                </h2>
            }
            menus={
                <>
                    <NavMenu link={"/dashboard"} title={"Dashboard"}></NavMenu>
                    <NavMenu link={"/daftar"} title={"Daftar"}></NavMenu>
                    <NavMenu link={"/hasil"} title={"Hasil"}></NavMenu>
                </>
            }
        >
            <Head title="Daftar" />
            <div className="flex-1">
                <div className="overflow-x-auto w-full bg-white">
                    <form name="createForm" onSubmit={handleSubmit}>
                        {props.flash.message}
                        <table className="table">
                            <thead>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className="text-2xl text-black"
                                    >
                                        Daftar Beasiswa
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="text-black">
                                {/* row 1 */}
                                <tr>
                                    <td>Nama</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="nama"
                                            placeholder="Type here"
                                            className="input input-bordered w-full input-sm text-white"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>NIM</td>
                                    <td>
                                        <input
                                            readOnly
                                            type="text"
                                            name="nim"
                                            placeholder="Type here"
                                            inputMode="numeric"
                                            pattern="[0-9]+"
                                            value={data.nim}
                                            className="input text-white input-bordered w-full input-sm"
                                            onChange={(e) =>
                                                setData("nim", e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Type here"
                                            value={data.email}
                                            className="input input-bordered text-white w-full input-sm"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>No. HP</td>
                                    <td>
                                        <input
                                            name="nohp"
                                            type="text"
                                            placeholder="Type here"
                                            inputMode="numeric"
                                            pattern="[0-9]+"
                                            value={data.nohp}
                                            className="input text-white input-bordered w-full input-sm"
                                            onChange={(e) =>
                                                setData("nohp", e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Semester saat ini</td>
                                    <td>
                                        <select
                                            name="semester"
                                            className="select select-bordered w-full select-sm text-xs text-white"
                                            onChange={(e) =>
                                                setData(
                                                    "semester",
                                                    e.target.value
                                                )
                                            }
                                            defaultValue={data.semester}
                                            id="semester"
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>IPK</td>
                                    <td>
                                        <input
                                            name="ipk"
                                            type="text"
                                            placeholder="Type here"
                                            className="input text-white input-bordered w-full input-sm"
                                            value={data.ipk}
                                            onChange={(e) =>
                                                setData("ipk", e.target.value)
                                            }
                                            readOnly
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pilihan Beasiswa</td>
                                    <td>
                                        <select
                                            className="select select-bordered w-full select-sm text-xs text-white"
                                            onChange={(e) =>
                                                setData(
                                                    "pilihan",
                                                    e.target.value
                                                )
                                            }
                                            defaultValue={data.pilihan}
                                        >
                                            <option value={"Akademik"}>
                                                Akademik
                                            </option>
                                            <option value={"Non-Akademik"}>
                                                Non-Akademik
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Berkas (PDF)</td>
                                    <td>
                                        <input
                                            name="file"
                                            type="file"
                                            accept="application/pdf"
                                            className="file-input file-input-bordered w-full file-input-sm text-white"
                                            onChange={(e) =>
                                                setData(
                                                    "file",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex lg:flex-row flex-col lg:space-x-2 space-x-0 lg:space-y-0 space-y-2 w-full justify-center pb-3 px-3">
                            {button()}

                            <a href={route("dashboard")} className="btn btn-error">Kembali</a>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
