import React from 'react'

export default function EmployeeCard({ image, name, email, gender}) {
    return (
        <div>
            <div className="card">
                <div className="img-container rounded img-fluid text-center">
                    <img alt={name} src={image} />
                </div>
                <div className="content text-center">
                    <ul className="list-unstyled">
                        <li>
                            <strong>Name:</strong> {name}
                            </li>
                        <li>
                            <strong>Email:</strong> {email}
                        </li>
                        <li>
                            <strong>Gender:</strong> {gender}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

