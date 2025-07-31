import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VehicleFiltersProps {
  selectedBrand: string;
  selectedCategory: string;
  onBrandChange: (brand: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function VehicleFilters({
  selectedBrand,
  selectedCategory,
  onBrandChange,
  onCategoryChange,
}: VehicleFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Select value={selectedBrand} onValueChange={onBrandChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Brands" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Brands</SelectItem>
          <SelectItem value="DENAGO">DENAGO</SelectItem>
          <SelectItem value="EVOLUTION">EVOLUTION</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Categories</SelectItem>
          <SelectItem value="Ranger Series">Ranger Series</SelectItem>
          <SelectItem value="Maverick Series">Maverick Series</SelectItem>
          <SelectItem value="Forester Series">Forester Series</SelectItem>
          <SelectItem value="Turfman Series">Turfman Series</SelectItem>
          <SelectItem value="Rover Series">Rover Series</SelectItem>
          <SelectItem value="D-MAX Series">D-MAX Series</SelectItem>
          <SelectItem value="Classic Series">Classic Series</SelectItem>
          <SelectItem value="Carrier Series">Carrier Series</SelectItem>
          <SelectItem value="Urban Series">Urban Series</SelectItem>
          <SelectItem value="Adventure Series">Adventure Series</SelectItem>
          <SelectItem value="Luxury Series">Luxury Series</SelectItem>
          <SelectItem value="Utility Series">Utility Series</SelectItem>
          <SelectItem value="Commercial Series">Commercial Series</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
