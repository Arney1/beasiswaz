import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Verifikasi(props) {
    function status() {
        if (props.myBeasiswa.status == "belum") {
            const statusz = "Belum Diverifikasi";
            return statusz;
        } else if (props.myBeasiswa.status == "lulus") {
            const statusz = "Lulus Beasiswa";
            return statusz;
        } else if (props.myBeasiswa.status == "tidak") {
            const statusz = "Tidak Lulus Beasiswa";
            return statusz;
        }
    }
    const id = props.myBeasiswa.id;
    function handle(status) {
        const data = {
            id,
            status,
        };
        Inertia.post("/beasiswa/update", data);
    }
    return (
        <AdminLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tabel Beasiswa
                </h2>
            }
        >
            <Head title="Dashboard" />

            
                <div className="flex-1">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* {props.myBeasiswa &&
                            props.myBeasiswa.map((beasiswa, i) => {
                                if (beasiswa.status == "belum") {
                                    beasiswa.status = "Belum Diverifikasi";
                                } else if (beasiswa.status == "lulus") {
                                    beasiswa.status = "Lulus Beasiswa";
                                } else if (beasiswa.status == "tidak") {
                                    beasiswa.status = "Belum Lulus";
                                }
                                return ( */}
                        <div className="overflow-x-auto w-full bg-white">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="text-2xl text-black"
                                        >
                                            Verifikasi Beasiswa
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="text-black">
                                    {/* row 1 */}
                                    <tr>
                                        <td>Nama</td>
                                        <td>{props.myBeasiswa.nama}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>NIM</td>
                                        <td>{props.myBeasiswa.nim}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Email</td>
                                        <td>{props.myBeasiswa.email}</td>
                                    </tr>
                                    <tr>
                                        <td>No. HP</td>
                                        <td>{props.myBeasiswa.nohp}</td>
                                    </tr>
                                    <tr>
                                        <td>Semester saat ini</td>
                                        <td>{props.myBeasiswa.semester}</td>
                                    </tr>
                                    <tr>
                                        <td>IPK</td>
                                        <td>{props.myBeasiswa.ipk}</td>
                                    </tr>
                                    <tr>
                                        <td>Pilihan Beasiswa</td>
                                        <td>{props.myBeasiswa.pilihan}</td>
                                    </tr>
                                    <tr>
                                        <td>Berkas</td>
                                        <td>
                                            {props.myBeasiswa.berkas}
                                            <a
                                                href={
                                                    "/docs/" + props.myBeasiswa.berkas
                                                }
                                                className="ms-2 btn btn-success btn-xs "
                                            >
                                                Lihat
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{status()}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex lg:flex-row flex-col lg:space-x-2 space-x-0 lg:space-y-0 space-y-2 w-full justify-center pb-3 px-3">
                                <button
                                    onClick={() => handle("lulus")}
                                    className="btn btn-primary"
                                >
                                    Lulus
                                </button>
                                <button
                                    onClick={() => handle("tidak")}
                                    className="btn btn-error"
                                >
                                    Tidak Lulus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </AdminLayout>
    );
}
