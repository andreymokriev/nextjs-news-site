export default async function fetchDataByHeader(header: string) {
    try {
        const baseUrl = typeof window === 'undefined' 
            ? process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000' 
            : '';
        
        const response = await fetch(`${baseUrl}/api/getData?header=${encodeURIComponent(header)}`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error fetching data:", errorData.error);
            return null;
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}
