import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import NavMenu from "@/Components/NavMenu";
import Lottie from "lottie-react";
import animationData from "../../../public/build/assets/animation_logjfep6.json";
import animationData2 from "../../../public/build/assets/animation_logkbp9s.json";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
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
            <Head title="Dashboard" />

            <div className="flex space-y-2 flex-col">
                <div className="bg-primary overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center lg:space-x-2 space-y-2 lg:space-y-0 space-x-0">
                    <div className="card bg-base-100 shadow-md flex-1 border-2 border-accent shadow-accent">
                        <figure className="h-auto lg:h-72 bg-gradient-to-t from-base-100 to-accent ">
                            <Lottie
                                className="h-auto lg:h-72"
                                animationData={animationData}
                            ></Lottie>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Beasiswa Akademik</h2>
                            <p>
                                Beasiswa akademik adalah bentuk dukungan
                                keuangan yang diberikan kepada siswa berprestasi
                                untuk membantu mereka mengejar pendidikan
                                tinggi. Beasiswa ini diberikan berdasarkan
                                pencapaian akademis yang luar biasa, prestasi
                                dalam berbagai bidang, atau kriteria tertentu
                                yang ditetapkan oleh penyelenggara beasiswa.
                            </p>
                            <div className="card-actions justify-end">
                                <Link
                                    href={route("daftar")}
                                    className="btn btn-accent"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md flex-1 border-2 border-secondary shadow-secondary">
                        <figure className="h-auto lg:h-72  bg-gradient-to-t from-base-100 to-secondary ">
                            <Lottie
                                className="h-auto lg:h-48"
                                animationData={animationData2}
                            ></Lottie>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Beasiswa Non-Akademik
                            </h2>
                            <p>
                                Beasiswa non-akademik adalah bentuk dukungan
                                keuangan yang diberikan kepada siswa berdasarkan
                                kriteria atau prestasi di luar bidang akademis.
                                Berbeda dengan beasiswa akademik yang fokus pada
                                pencapaian akademis seperti nilai, peringkat
                                kelas, atau bidang studi tertentu, beasiswa
                                non-akademik memberikan penekanan pada
                                aspek-aspek lain dari kehidupan siswa.
                            </p>
                            <div className="card-actions justify-end">
                                <Link
                                    href={route("daftar")}
                                    className="btn btn-secondary"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
