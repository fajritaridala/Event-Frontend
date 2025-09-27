import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { ToasterContext } from "@/contexts/ToasterContext";
import categoryService from "@/services/category.service";
import uploadService from "@/services/upload.service";
import { ICategory, ICategoryForm } from "@/types/Category";

// form schema
const schema = yup.object().shape({
  name: yup.string().required("Please input name"),
  description: yup.string().required("Please input description"),
  icon: yup.mixed<FileList>().required("Please input icon"),
});

const useAddCategoryModal = () => {
  const { setToaster } = useContext(ToasterContext);
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const uploadIcon = async (data: ICategoryForm) => {
    const formData = new FormData();
    formData.append("file", data.icon[0]);
    const {
      data: {
        data: { secure_url: icon },
      },
    } = await uploadService.uploadFile(formData);
    return { name: data.name, description: data.description, icon };
  };

  const addCategory = async (payload: ICategory) => {
    const res = await categoryService.addCategory(payload);
    return res;
  };

  const {
    mutate: mutateAddCategory,
    isPending: isPendingMutateAddCategory,
    isSuccess: isSuccessMutateAddCategory,
  } = useMutation({
    mutationFn: addCategory,
    onError: (error) => {
      setToaster({
        type: "error",
        message: error.message,
      });
    },
    onSuccess: () => {
      setToaster({
        type: "success",
        message: "Success add category",
      });
      reset();
    },
  });

  const { mutate: mutateAddFile, isPending: isPendingMutateAddFile } =
    useMutation({
      mutationFn: uploadIcon,
      onError: (error) => {
        setToaster({
          type: "error",
          message: error.message,
        });
      },
      onSuccess: (payload) => {
        mutateAddCategory(payload);
      },
    });

  const handleAddCategory = (data: ICategoryForm) => mutateAddFile(data);
  return {
    control,
    errors,
    handleSubmitForm,
    handleAddCategory,
    isPendingMutateAddCategory,
    isSuccessMutateAddCategory,
    isPendingMutateAddFile,
  };
};

export default useAddCategoryModal;
