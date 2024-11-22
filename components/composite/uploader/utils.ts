export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const isValidFileType = (file: File, accept: string): boolean => {
  if (!accept) return true;

  const acceptedTypes = accept.split(",").map(type => type.trim().toLowerCase());
  const fileType = file.type.toLowerCase();
  const fileName = file.name.toLowerCase();

  return acceptedTypes.some(type => {
    // Handle wildcards (e.g., "image/*")
    if (type.endsWith("/*")) {
      const baseType = type.split("/")[0];
      return fileType.startsWith(`${baseType}/`);
    }
    
    // Handle file extensions (e.g., ".pdf")
    if (type.startsWith(".")) {
      return fileName.endsWith(type);
    }

    // Handle PDF
    if (type === ".pdf" || type === "application/pdf") {
      return fileType === "application/pdf" || fileName.endsWith(".pdf");
    }

    // Handle exact MIME type
    return type === fileType;
  });
};

export const isValidFileSize = (file: File, maxSize: number): boolean => {
  if (!maxSize || maxSize === Infinity) return true;
  return file.size <= maxSize;
};