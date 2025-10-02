import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import MinimalistCV from "@/components/minimalist-cv";
import { Button } from "@/components/ui/button";

import { PrinterIcon } from "lucide-react";

const CVPage = () => {
    const contentRef = useRef(null);

    const handlePrint = useReactToPrint({ contentRef });

    return (
        <div className="flex flex-col pt-10">
            <div className="flex items-center gap-2 px-6">
                <Button onClick={handlePrint} variant="secondary">
                    <PrinterIcon className="size-4 mr-2" />
                    Imprimer
                </Button>
            </div>
            <div ref={contentRef}>
                <MinimalistCV />
            </div>
        </div>
    );
};

export default CVPage;
