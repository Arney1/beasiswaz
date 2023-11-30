import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect, Link } from "react";
import NavMenu from "@/Components/NavMenu";
import { Inertia } from "@inertiajs/inertia";
import Lottie from "lottie-react";
import animationData from "../../../public/build/assets/animation_logjfep6.json";
import animationData2 from "../../../public/build/assets/animation_logkbp9s.json";

export default function Dashboard(props) {
    useEffect(() => {
        if (!props.myBeasiswa) {
            Inertia.get("/hasil");
        }

        console.log(props);
        return;
    }, []);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hasil
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
            <Head title="Hasil" />

            <div className="flex-1 flex-col flex space-y-2">
                {props.flash.message && props.flash.message.length > 0 ? (
                    <div className="p-4 bg-primary rounded-lg text-black">
                        {props.flash.message}
                    </div>
                ) : (
                    <></>
                )}

                <div className="bg-primary overflow-hidden shadow-sm sm:rounded-lg">
                    {props.myBeasiswa && props.myBeasiswa.length > 0 ? (
                        props.myBeasiswa.map((beasiswa, i) => {
                            if (beasiswa.status == "belum") {
                                beasiswa.status = "Belum Diverifikasi";
                            } else if (beasiswa.status == "lulus") {
                                beasiswa.status = "Lulus Beasiswa";
                            } else if (beasiswa.status == "tidak") {
                                beasiswa.status = "Belum Lulus";
                            }
                            return (
                                <div
                                    className="overflow-x-auto w-full bg-white"
                                    key={i}
                                >
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
                                                <td>{beasiswa.nama}</td>
                                            </tr>
                                            {/* row 2 */}
                                            <tr>
                                                <td>NIM</td>
                                                <td>{beasiswa.nim}</td>
                                            </tr>
                                            {/* row 3 */}
                                            <tr>
                                                <td>Email</td>
                                                <td>{beasiswa.email}</td>
                                            </tr>
                                            <tr>
                                                <td>No. HP</td>
                                                <td>{beasiswa.nohp}</td>
                                            </tr>
                                            <tr>
                                                <td>Semester saat ini</td>
                                                <td>{beasiswa.semester}</td>
                                            </tr>
                                            <tr>
                                                <td>IPK</td>
                                                <td>{beasiswa.ipk}</td>
                                            </tr>
                                            <tr>
                                                <td>Pilihan Beasiswa</td>
                                                <td>{beasiswa.pilihan}</td>
                                            </tr>
                                            <tr>
                                                <td>Berkas</td>
                                                <td>
                                                    {beasiswa.berkas}
                                                    <a
                                                        href={
                                                            "/docs/" +
                                                            beasiswa.berkas
                                                        }
                                                        className="btn btn-success btn-xs ml-5"
                                                    >
                                                        Lihat
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td>{beasiswa.status}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-xl text-black p-4">
                            Anda belum daftar beasiswa
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
