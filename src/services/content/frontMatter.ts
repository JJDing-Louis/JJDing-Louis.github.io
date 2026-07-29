export interface FrontMatterResult {
  data: Record<string, unknown>;
  content: string;
}

const parseScalarValue = (value: string): unknown => {
  const trimmed = value.trim();

  if (trimmed === "[]") {
    return [];
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (/^-?\d+$/.test(trimmed)) {
    return Number.parseInt(trimmed, 10);
  }

  if (/^-?\d+\.\d+$/.test(trimmed)) {
    return Number.parseFloat(trimmed);
  }

  return trimmed.replace(/^['"]|['"]$/g, "");
};

export const parseFrontMatter = (raw: string): FrontMatterResult => {
  if (!raw.startsWith("---")) {
    return {
      data: {},
      content: raw
    };
  }

  const normalized = raw.replace(/\r\n/g, "\n");
  const closingMarkerIndex = normalized.indexOf("\n---", 3);

  if (closingMarkerIndex === -1) {
    return {
      data: {},
      content: raw
    };
  }

  const frontMatterBlock = normalized.slice(4, closingMarkerIndex).trim();
  const content = normalized.slice(closingMarkerIndex + 4).replace(/^\n/, "");
  const data: Record<string, unknown> = {};
  let currentArrayKey: string | null = null;

  frontMatterBlock.split("\n").forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === "") {
      return;
    }

    if (trimmedLine.startsWith("- ") && currentArrayKey) {
      const currentValue = data[currentArrayKey];
      const nextItem = parseScalarValue(trimmedLine.slice(2));

      if (Array.isArray(currentValue)) {
        currentValue.push(nextItem);
      } else {
        data[currentArrayKey] = [nextItem];
      }
      return;
    }

    const separatorIndex = trimmedLine.indexOf(":");
    if (separatorIndex === -1) {
      currentArrayKey = null;
      return;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    if (value === "") {
      data[key] = [];
      currentArrayKey = key;
      return;
    }

    data[key] = parseScalarValue(value);
    currentArrayKey = null;
  });

  return {
    data,
    content
  };
};
