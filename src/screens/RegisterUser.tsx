import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { registerUser } from "../services/auth";

interface Address {
    zip: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    complement?: string;
    number: string;
};

export interface RegisterUserData {
    password: string;
    email: string;
    phone: string;
    name: string;
    cpf_cnpj: string;
    address: Address;
};

export default function RegisterUser() {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm<RegisterUserData>();

    const onSubmit: SubmitHandler<RegisterUserData> = (data: RegisterUserData) => {
        try {
            registerUser(data);
        } catch (error) {
            console.error('Error during registration:', error)
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IconButton
                    icon="arrow-left"
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ fontSize: 18, marginLeft: 10 }}>
                    Cadastro de Estabelecimento
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Nome"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.name}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.name && <Text style={styles.errorText}>Nome é obrigatório.</Text>}

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Email"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.email}
                        />
                    )}
                    rules={{ required: true, pattern: /^\S+@\S+$/i }}
                />
                {errors.email && <Text style={styles.errorText}>Email é obrigatório e deve ser válido.</Text>}

                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Telefone"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.phone}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.phone && <Text style={styles.errorText}>Telefone é obrigatório.</Text>}

                <Controller
                    name="cpf_cnpj"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="CPF/CNPJ"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.cpf_cnpj}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.cpf_cnpj && <Text style={styles.errorText}>CPF/CNPJ é obrigatório.</Text>}

                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Senha"
                            mode='outlined'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.password}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.password && <Text style={styles.errorText}>Senha é obrigatória.</Text>}

                <Controller
                    name="address.zip"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="CEP"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.zip}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.zip && <Text style={styles.errorText}>CEP é obrigatório.</Text>}

                <Controller
                    name="address.state"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Estado"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.state}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.state && <Text style={styles.errorText}>Estado é obrigatório.</Text>}

                <Controller
                    name="address.city"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Cidade"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.city}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.city && <Text style={styles.errorText}>Cidade é obrigatória.</Text>}

                <Controller
                    name="address.neighborhood"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Bairro"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.neighborhood}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.neighborhood && <Text style={styles.errorText}>Bairro é obrigatório.</Text>}

                <Controller
                    name="address.street"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Rua"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.street}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.street && <Text style={styles.errorText}>Rua é obrigatória.</Text>}

                <Controller
                    name="address.number"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Número"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            error={!!errors.address?.number}
                        />
                    )}
                    rules={{ required: true }}
                />
                {errors.address?.number && <Text style={styles.errorText}>Número é obrigatório.</Text>}

                <Controller
                    name="address.complement"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Complemento"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                        />
                    )}
                />
            </View>

            <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
            >
                Criar
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        borderRadius: 8,
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
