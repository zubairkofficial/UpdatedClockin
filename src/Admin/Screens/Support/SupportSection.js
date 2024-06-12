import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Helpers from '../../../Config/Helpers'
import Sidebar from '../../Components/Sidebar'

function SupportSection() {
    const [questions, setQuestion] = useState([])
    const getQuestion = async () => {
        const response = await axios.get(`${Helpers.apiUrl}question/show`)
        setQuestion(response.data.data)
        console.log('data', response.data.data)
    }
    useEffect(() => {
        getQuestion()
    }, [])
    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                <div className="card mb-5 mb-xl-8 bg-slate-200">
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold fs-3 mb-1">Questions</span>
                        </h3>
                    </div>
                    <div className="card-body py-3 rounded m-5 bg-gray-100">
                        <div className="table-responsive">
                            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr className="fw-bold text-muted">
                                        <th className="min-w-50px">Image</th>
                                        <th className="min-w-150px">Subject</th>
                                        <th className="min-w-150px">Email</th>
                                        <th className="min-w-250px">Help</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map(question => (
                                        <tr key={question.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                                                        <img src={`${Helpers.basePath}/storage/${question.image}`} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{question.subject}</td>
                                            <td>{question.email}</td>
                                            <td>{question.help}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection