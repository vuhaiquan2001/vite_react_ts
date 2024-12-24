import { ConfigProvider, ConfigProviderProps, theme } from 'antd';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// Định nghĩa kiểu dữ liệu cho context
interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Tạo context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook để sử dụng context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Mở rộng interface để thêm props
interface ConfigAntdProps extends ConfigProviderProps {
    children: React.ReactNode;
}

// Cấu hình theme và các settings mặc định
const defaultConfig: ConfigProviderProps = {
    theme: {
        token: {
            // colorPrimary: '#00b96b', //Thay đổi primary color
        },
    },
};

const AntdProvider: React.FC<ConfigAntdProps> = ({ children, ...otherProps }) => {
    // State quản lý theme
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('ciren-app-theme');
        return savedTheme === 'dark';
    });

    // Hàm toggle theme
    const toggleTheme = useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);
    useEffect(() => {
        localStorage.setItem('ciren-app-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Merge config
    const config: ConfigProviderProps = {
        ...defaultConfig,
        ...otherProps,
        theme: {
            ...defaultConfig.theme,
            ...otherProps.theme,
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        },
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ConfigProvider {...config}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default AntdProvider;
