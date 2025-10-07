"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Infectados() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/infectados`;
                const response = await axios.get(apiUrl);
                
                setDados(response.data);
            } catch (err) {
                setError("Não foi possível carregar os dados. Verifique a API e a sua conexão.");
                console.error("Erro ao buscar dados:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}><h1>Carregando...</h1></div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}><h1>Erro!</h1><p>{error}</p></div>;
    }

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <h1>Todos os Infectados</h1>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                
                {dados.length > 0 ? (
                    dados.map((item) => (
                        <div key={item.id} style={{ 
                            border: '1px solid #ddd', 
                            borderRadius: '8px', 
                            padding: '16px', 
                            width: '300px', 
                            boxShadow: '0 4px 8px rgba(240, 240, 240, 0.42)' 
                        }}>
                            
                            {item.imagem && (
                                <img
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${item.imagem}`}
                                    alt={`Imagem de ${item.nome}`}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                                />
                            )}
                            
                            <h2 style={{ marginTop: '10px' }}>{item.nome}</h2>

                            <p style={{ color: '#fff', fontSize: '14px' }}>{item.descricao}</p>

                            <div style={{ marginTop: '15px', fontSize: '14px' }}>
                                <p><strong>Papel:</strong> {item.papel}</p>
                                <p><strong>Status:</strong> {item.status}</p>
                                <p><strong>Origem:</strong> {item.origem}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum infectado encontrado.</p>
                )}
            </div>
        </div>
    );
}