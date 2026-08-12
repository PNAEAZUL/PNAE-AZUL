const SUPABASE_URL = "https://dzfamogbogonwxgdpvbl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_50Zeo1eoWIT7SJxvfA2W7A_N4Ls46kO";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function salvarAtendimento(status) {
    // Pegando valores do HTML
        const voo = document.getElementById("voo").value.trim();
            const passageiro = document.getElementById("cliente").value.trim(); // Ajustado para 'passageiro'
                const servico = document.getElementById("servico").value.trim();
                    const origem = document.getElementById("origem").value.trim() || "N/A";

                        const novoAtendimento = {
                                voo: voo,
                                        passageiro: passageiro, // Nome exato da coluna no seu Supabase
                                                servico: servico,
                                                        origem: origem,
                                                                status: status
                                                                    };

                                                                        try {
                                                                                const { error } = await supabaseClient
                                                                                            .from('atendimentos')
                                                                                                        .insert([novoAtendimento]);

                                                                                                                if (error) {
                                                                                                                            console.error("Erro do Supabase:", error);
                                                                                                                                        alert("Erro ao salvar: " + error.message);
                                                                                                                                                } else {
                                                                                                                                                            alert("Registrado na nuvem!");
                                                                                                                                                                        carregarAtendimentosDoSupabase();
                                                                                                                                                                                }
                                                                                                                                                                                    } catch (err) {
                                                                                                                                                                                            console.error("Erro de rede:", err);
                                                                                                                                                                                                }
                                                                                                                                                                                                }

                                                                                                                                                                                                async function carregarAtendimentosDoSupabase() {
                                                                                                                                                                                                    try {
                                                                                                                                                                                                            const { data, error } = await supabaseClient
                                                                                                                                                                                                                        .from('atendimentos')
                                                                                                                                                                                                                                    .select('*');

                                                                                                                                                                                                                                            if (error) throw error;
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                            // Atualiza a interface com os dados reais do banco
                                                                                                                                                                                                                                                                    console.log("Dados recebidos:", data);
                                                                                                                                                                                                                                                                            // ... (resto da lógica de renderização)
                                                                                                                                                                                                                                                                                } catch (err) {
                                                                                                                                                                                                                                                                                        console.error("Erro ao buscar:", err);
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                            